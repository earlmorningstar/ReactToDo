const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 5177;

app.use(express.json());

const jsonFilePath = path.join(__dirname, 'tasks.json');

// app.get('/tasks', async (req, res) => {
//   try {
//     const data = await fs.readFile(jsonFilePath, 'utf-8');
//     res.json(JSON.parse(data));
//   } catch (error) {
//     res.status(500).json({ error: 'Error reading tasks file.' });
//   }
// });

app.get('/tasks', async (req, res) => {
    try {
      await fs.access(jsonFilePath);
      const data = await fs.readFile(jsonFilePath, 'utf-8');
      const tasks = JSON.parse(data);
      res.json(tasks);
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.status(404).json({ error: 'Tasks file not found.' });
      } else {
        res.status(500).json({ error: 'Error reading tasks file.' });
      }
    }
  });

  
app.post('/tasks', async (req, res) => {
  try {
    const tasks = req.body;
    await fs.writeFile(jsonFilePath, JSON.stringify(tasks));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error writing tasks file.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const startServer = async () => {
//     try {
//       await app.listen(port);
//       console.log(`Server is running on port ${port}`);
//     } catch (error) {
//       console.error('Error starting the server:', error.message);
//     }
//   };
  
//   startServer();
  