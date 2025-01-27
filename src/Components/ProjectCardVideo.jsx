function ProjectCardVideo({ vid, title, text, href1, href2, link1, link2 }) {

    return (
        <div className="card border-0 shadow mt-3 hover-shadow">
            <iframe className="card-img-top embed-responsive-item"
                src={vid}
                preload="auto" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Untitled">
                Your browser does not support iframes, or the video cannot be loaded.
            </iframe>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={href1} className="view_btn project_btn" target="_blank" rel="noopener noreferrer">{link1}</a>
                <a href={href2} className="code_btn project_btn" target="_blank" rel="noopener noreferrer">{link2}</a>
            </div>
        </div>
    )
}
export default ProjectCardVideo
