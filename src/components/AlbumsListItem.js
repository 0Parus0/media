import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotoList from "./PhotosList";

function AlbumsListItem({ album }) {

    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = <>
        <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum} ><GoTrash /></Button>
        {album.title}
    </>
    return <ExpandablePanel key={album.id} header={header}>
                <PhotoList album={album} />
            </ExpandablePanel>
}

export default AlbumsListItem;