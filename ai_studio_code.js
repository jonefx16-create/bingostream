const express = require('express');
const path = require('path');
const app = express();

// Render የሚሰጠንን ፖርት (Port) ይጠቀማል
const PORT = process.env.PORT || 3000;

// 'public' ፎልደር ውስጥ ያሉትን ፋይሎች (HTML, CSS, JS) ለተጠቃሚው ያሳያል
app.use(express.static(path.join(__dirname, 'public')));

// ተጠቃሚው ዌብሳይቱን ሲከፍት index.html ን እንዲያገኝ ያደርጋል
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ሰርቨሩን ማስነሻ
app.listen(PORT, () => {
    console.log(`Bingo Server is running on port ${PORT}`);
});