import {NextPage} from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
    return (
        <div>
            <div>에러</div>
            <Link href={"/search"}>검색</Link>
        </div>
    )
}

export default NotFound;