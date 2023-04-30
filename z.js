import fetch from 'node-fetch';


var obj=[

        "[\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E01.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E02.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School-2017-S01-E03.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01.E04.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E05.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E06.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E07.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E08.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E09.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E10.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E11.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E12.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E13.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E14.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E15.mp4\",\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E16.mp4\"]",
        "[\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/the-lion-king.mp4\"]",
        "[\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Sarkaru-Vaari-Paata.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Ekannoborti.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Indubala-Bhaater-Hotel.mp4\"]",
        "[\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/raabta.mp4\"]",
        "[\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/kedarnath.mp4\"]",
        "[\"https://flame2.bdff.workers.dev/0:/mcubd2/Others/Extraction.mp4\"]",
        "[\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Bekas.mp4\"]",
        "[\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Monpura.mp4\"]",
        "[\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Moonfall.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/John-Wick-Chapter-2.mp4\"]",
        "[\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Major.mp4\"]",
        "[\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Sita-Ramam.mp4\"]",
        "[\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E01.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E02.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E03.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E04.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E05.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E06.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E07.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E08.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E09.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E10.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E11.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E12.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E13.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E14.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E15.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E16.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E17.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E18.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E19.mkv\",\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/doctors/Doctors-S01E20.mkv\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Bird-Box.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Shubh.Mangal.Zyada-Saavdhan.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Generation-Aami-(2018).mp4\"]",
        "[\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Jab-We-Met.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/chini.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/your-name.mkv\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/buddy_daddys/buddy-daddies-episode-1.mp4\",\"https://root.bdff.workers.dev/0:/mcubd/others/buddy_daddys/buddy-daddies-episode-2.mp4\",\"https://root.bdff.workers.dev/0:/mcubd/others/buddy_daddys/buddy-daddies-episode-3.mp4\",\"https://root.bdff.workers.dev/0:/mcubd/others/buddy_daddys/buddy-daddies-episode-4.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Mini.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Jagga-Jasoos.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Badhaai-Ho.mp4\"]",
        "[\"https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Zootopia-hindi.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Alvin.and.the.Chipmunks-2007.mp4\"]",
        "[\"https://root.bdff.workers.dev/0:/mcubd/others/Work.It.mp4\"]",
        "[\"https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Taaza.Khabar.mp4\"]"
    ]


// var data= fetch("https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Taaza.Khabar.mp4").then((res) => { return { status: res.status, url: 'taza' } })

var arr=[]
for (let i = 0; i < obj.length; i++) {
    arr=[...arr,...JSON.parse(obj[i])]
    
    
}
// console.log(arr)

var i=0
setInterval(async () => {
    
    var data= fetch(JSON.parse(obj[i])[0]).then((res) => { return { status: res.status, url: JSON.parse(obj[i])[0] } })

    console.log(await data)
    
    i=i+1
}, 2000);

// const ar = []
// for (const i of document.getElementById('cont').children) {
//   ar.push(i.getElementsByClassName('link')[0].innerText)
// };console.log(ar)