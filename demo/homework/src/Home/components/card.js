import './components.css'

const Card = ({name, image_path}) =>{
    return <div>
        <div className="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> AB3112*/}
        <img src={require(`./image/${name}.jpg`)} alt="Logo"/>
        <div className="container">
            <h4><b></b></h4> 
            <p>{`${name}`}</p> 
        </div>
        </div>
    </div>

}

export default Card