export const saveContact= async (req,res)=>{
    try{
        const {name,email,message}=req.body;
        console.log({name,email,message});
        
    res.status(201).json({ message: "Data received successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}