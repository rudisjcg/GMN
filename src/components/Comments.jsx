export default function Comments({comment}) {
    console.log(comment)
    return (
        <div className="border max-w-lg">
        {comment?.map((comment) => (
            <div className="p-2 border" key={comment.id}>
            <p className="mb-5">{comment.comment}</p>
            <div className="flex">{comment?.images?.map((img) => (
                <picture className="" key={img.id}>
                    <img className="w-[250px]" src={img}/>
                </picture>
            ))}</div>
            </div>
        )
        )}
        </div>
    );
}