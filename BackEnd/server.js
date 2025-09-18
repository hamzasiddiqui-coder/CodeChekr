require('dotenv').config({ path: './src/.env' })
const app = require('./src/app')

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`)
})