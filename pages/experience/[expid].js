import { useRouter } from 'next/router';

function DynamicExperience() {
    const router = useRouter();
    const { expid } = router.query;

    return <h1>Dynamic Experience Page: {expid} </h1>;
}

export default DynamicExperience;