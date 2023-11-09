import Link from "next/link";

export default function Comments({comment}) {
    return (
        <div className="border max-w-lg">
        {comment?.map((comment) => (
            <Link key={comment.id} href={`/${comment._id}`}>
            <div className="p-2 border">
            <p className="mb-5">{comment.comment}</p>
            <div className="flex">{comment?.images?.map((img) => (
                <picture className="" key={img.id}>
                    <img className="w-[250px]" src={img}/>
                </picture>
            ))}</div>
            </div>
            </Link>
        )
        )}
        </div>
    );
}