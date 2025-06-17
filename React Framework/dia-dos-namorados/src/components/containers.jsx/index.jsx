
export function ContainersPictures({linkImage,text,className}){
    return(
        <section className={className}>
            <div>
                <img src={linkImage} alt="Alguma foto" />
            </div>
            <div className="text-size">  
                <h3>{text}</h3>
            </div>
        </section>
    )
}