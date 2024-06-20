let arr = [
    {
        id: 1,
        title: "Sevgi travmasını bu yolla müalicə etmək olar",
        content: `Transkranial maqnit beyin stimullaşdırılması sevgi travması sindromunun (LTS) müalicəsində kömək edə bilər. Axşam.az xəbər verir ki, bu barədə "The Guardian" jurnalı məlumat yayıb. Nəşrin məlumatına görə, tədqiqatda sevgi travması olan 36 könüllü iştirak edib. Onlar üç qrupa bölünərək, hər biri beş gün ərzində gündə iki dəfə 20 dəqiqə ərzində transkranial birbaşa cərəyan stimullaşdırıcı qulaqlıqlar taxıblar. İranın Zəncan Universiteti və Almaniyanın Bielefeld Universitetinin tədqiqatçıları simptomların əhəmiyyətli dərəcədə azaldığını müşahidə ediblər. Müalicəni dayandırdıqdan bir ay sonra da könüllülər özlərini yaxşı hiss ediblər.`,
        like: 40,
        img: ["https://upload.az/foto/arxiv/sevgiii_21718664774.jpg"],
        tarix: new Date().getDate(),
        thumbImg: "https://upload.az/foto/arxiv/sevgiii_21718664774.jpg",
        preview: 180,
        category: "sevgi"
    }
]

function getAllNews(req, res) {
    try {
        res.json(arr)
    } catch (error) {
        res.json({ "error": error.message })
    }
}

function getNewsByCategory(req, res) {
    try {
        const { category } = req.params
        const categoryArr = arr.filter(item => item.category === category)
        res.json(categoryArr)
    } catch (error) {
        res.json({ "error": error.message })
    }
}

function getNewsByIdAndCategory(req, res) {
    try {
        const { category, id } = req.params
        const obj = arr.find(item => item.category === category && item.id == id)
        res.json(obj)
    } catch (error) {
        res.json({ "error": error.message })
    }
}

function createNews(req, res) {
    console.log(req.body);
    try {
        arr.push({
            tarix: new Date().getDate(),
            id: arr.length + 1,
            ...req.body
        })
        res.json(arr)
    } catch (error) {
        res.json({ "error": error.message })
    }
}

function deleteNews(req, res) {
    try {
        const { id } = req.params;
        const deleteElement = arr.find(item => item.id == id);
        
        if (!deleteElement) {
            return res.status(404).json({ "error": "Element not found" });
        }

        arr = arr.filter(item => item.id != id);
        res.json(deleteElement);
    } catch (error) {
        res.json({ "error": error.message });
    }
}
function updateNews(req, res) {
    try {
        const { id, category } = req.params
        let index = arr.findIndex(item => item.id == id && item.category == category)
        arr[index] = {
            ...req.body,
            id: +id,
            tarix: new Date().getDate(),
        }
        res.json(arr[index])
    } catch (error) {
        res.json({ "error": error.message })
    }
}

module.exports = { updateNews, deleteNews, createNews, getNewsByIdAndCategory, getNewsByCategory, getAllNews }
