import './ContainerImage.css';

const ContainerImage = ({ src, alt = "Image", className = "" }) => {
    return (
        <div className={`container-image ${className}`}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default ContainerImage;