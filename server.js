// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Subscribe API
// app.post('/api/subscribe', (req, res) => {
//   const { email } = req.body;

//   if (!email || !/\S+@\S+\.\S+/.test(email)) {
//     return res.status(400).json({ error: 'Invalid email format' });
//   }

//   console.log('New subscriber:', email);
//   res.status(200).json({ message: 'Subscription successful!' });
// });

// // Serveri işə sal
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
