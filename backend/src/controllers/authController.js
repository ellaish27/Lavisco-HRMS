// backend/src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(400).json({ error: 'Invalid credentials' });

    const user = rows[0];
    if (user.is_locked) return res.status(403).json({ error: 'Account locked' });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      // Increment failed attempts
      await db.execute(
        'UPDATE users SET failed_login_attempts = failed_login_attempts + 1 WHERE id = ?',
        [user.id]
      );
      const newAttempts = user.failed_login_attempts + 1;
      if (newAttempts >= 5) {
        await db.execute('UPDATE users SET is_locked = TRUE WHERE id = ?', [user.id]);
        return res.status(403).json({ error: 'Account locked after 5 failed attempts' });
      }
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Reset failed attempts
    await db.execute('UPDATE users SET failed_login_attempts = 0 WHERE id = ?', [user.id]);

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { login };
