import { useRouter } from 'next/router';

function DynamicAbout() {
    const router = useRouter();
    const { aboutid } = router.query;

    return <h1>Dynamic About Page: {aboutid} </h1>;
}   

export default DynamicAbout;