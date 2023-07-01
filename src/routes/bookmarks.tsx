import { For } from "solid-js";
import { A, Outlet } from "solid-start";

interface Bookmark {
  id: number;
  title: string;
  url: string;
}

const bookmarks: Bookmark[] = [
  {
    id: 1,
    title: "Learn Solid",
    url: "https://start.solidjs.com/",
  },
  {
    id: 2,
    title: "Learn Svelte",
    url: "https://svelte.dev/",
  },
];

export default function BookmarksLayout() {
  return (
    <div>
      <h1>Bookmarks</h1>
      <ul>
        <For each={bookmarks}>
          {(bookmark) => (
            <li id={bookmark.id.toString()}>
              <A href={`/bookmarks/${bookmark.id}`}>{bookmark.title}</A>
            </li>
          )}
        </For>
      </ul>
      <Outlet />
    </div>
  );
}
