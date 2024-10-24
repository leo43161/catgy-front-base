
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getPrestadores(req, res);
        case "POST":
            return await postPrestador(req, res);
        case "PUT":
            return await putPrestador(req, res);
        default:
            return res.status(400).send("Method not allowed");
    }
}

const getPrestadores = async (req, res) => {
    try {
        
        return res.status(200).json(results[0]);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const putPrestador = async (req, res) => {
    const { params } = req.body.params;
    try {
        const results = await poolEatt.query(queryPostPrest(params));
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const postPrestador = async (req, res) => {
    const { params } = req.body.params;
    try {
        const results = await poolEatt.query(queryPostPrest(params));
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
};