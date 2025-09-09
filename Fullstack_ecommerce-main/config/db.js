import mongoose from "mongoose";


const connectDB=async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        const { host, name, user } = mongoose.connection

        // Best-effort parse of username and cluster host from the URI (without exposing password)
        const uri = process.env.MONGO_URL || ""
        let uriUser = user || ""
        let clusterHost = ""
        try {
            // mongodb+srv://<user>:<pass>@<cluster-host>/<db>
            const afterProtocol = uri.split("://")[1] || ""
            const atIndex = afterProtocol.indexOf("@")
            if (atIndex !== -1) {
                const creds = afterProtocol.slice(0, atIndex)
                const hostAndRest = afterProtocol.slice(atIndex + 1)
                const colonIndex = creds.indexOf(":")
                uriUser = colonIndex !== -1 ? creds.slice(0, colonIndex) : creds
                clusterHost = hostAndRest.split("/")[0]
            }
        } catch (_) {}

        console.log(
            `MongoDB connected -> host: ${host}, db: ${name}, user: ${uriUser || "<none>"}, cluster: ${clusterHost || host}`
        )
    } catch (error) {
        console.log(`error in mongodb ${error}`)
    }
}

export default connectDB