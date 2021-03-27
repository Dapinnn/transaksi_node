//inisialisasi library
const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./route/user")
app.use("/", user)

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai",auth, pegawai)

//import route siswa
const siswa = require("./route/siswa")
app.use("/siswa", siswa)

//import route pegawai
const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran",pelanggaran)

//membuat web server dengan port 2000
app.listen(2000, () => {
    console.log("server run on port 2000")
})

//base url -> http://localhost:2000/pelanggaran_siswa
const pelanggaran_siswa = require("./route/pelanggaran_siswa")
app.use("/pelanggaran_siswa", pelanggaran_siswa)

//base url -> http://localhost:2000/detail_pelanggaran_siswa
const detail_pelanggaran_siswa = require("./route/detail_pelanggaran_siswa")
app.use("/detail_pelanggaran_siswa", detail_pelanggaran_siswa)
