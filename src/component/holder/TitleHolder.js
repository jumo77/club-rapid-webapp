export default function TitleHolder({title, brief}) {
    return (
        <div className="row justify-content-center text-center">
            <div className="col-12">
                <div className="title-wraper large">
                    {title}
                </div>
                <div className="brief-description">
                    {brief}
                </div>
            </div>
        </div>
    )
}