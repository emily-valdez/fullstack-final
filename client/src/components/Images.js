import React, {useState} from "react";
import Axios from "axios";
import {Image} from "cloudinary-react"

function ImageUpload() {

    const [imageSelected, setImageSelected] = useState("")

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "kupijxox")

        Axios.post("https://api.cloudinary.com/v1_1/debhztqlv/image/upload",
        formData
        ).then((response) => 
        console.log(response))
    };

    return (
    <div>
        <input type="file" onChange={(e) => {
            setImageSelected(e.target.files[0])
        }}/>
        <button onClick={uploadImage}>Upload Image</button>

        <Image
        style={{height:200, width:200}} 
        cloudName="debhztqlv" 
        publicId=""
        />
    </div>
    )
}

export default ImageUpload