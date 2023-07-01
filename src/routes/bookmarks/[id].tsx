import { Title, useParams } from "solid-start";

export default function BookmarkDetail() {
    const params = useParams();
    return (
        <main>
            <Title>Bookmark #{params.id}</Title>
            <h1>Bookmark Details</h1>
            <pre>Bookmark #{params.id}</pre>
        </main>
    )
}