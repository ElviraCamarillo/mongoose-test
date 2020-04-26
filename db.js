const mongoose = require('mongoose')

const user = 'devElvira'
const password = 'E1v1ra.1'
const host = 'kodemiaseptimageneracion-o1w40.mongodb.net'
const dbName = 'kodemia'

const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`

const koderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 100,
        minlength: 2
    },
    generation:{
        type: Number,
        required: true,
        min: 1
    },
    gender:{
        type: String,
        enum: ['m','f', 'n']
    },
    // isActive:{
    //     type: Boolean,
    //     required: true
    // },
    // date:{
    //     type:  Date,
    //     required: true,
    //     default: new Date()
    // },
    // extra:{
    //     type: Object
    // },
    // courses:{
    //     type: [Object],
    //     unique: true
    // }

})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('SE CONECTÓ, TODO OK')
        const Koder = mongoose.model('koders',koderSchema)
        // QUERY
        // koder.find({generation:7})
        //     .then(koders=>{
        //         console.log('koders: ',koders)
        //     })
        //     .catch(error=>{
        //         console.error('ERRROR EN CONSULTA:',error)
        //     })

        //Creación de un doc
        // const newKoder = new Koder({ name: 'nuevo koder', generation: 7, gender: 'n' })
        // newKoder.save()
        //     .then(()=>console.log('New Koder creado'))
        //     .catch(error=>{
        //         console.error('Koder no  creado', error)
        //     })
        Koder.create({ name: 'nuevo koder shorcut', generation: 7, gender: 'n' })
        .then(()=>console.log('New Koder creado'))
        .catch(error=>{ console.error('Koder no  creado', error)})         
    })
    .catch(error=>{
        console.error('ERRROR EN CONNECT:', error)
    })
