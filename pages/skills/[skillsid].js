import { useRouter } from 'next/router';

function DynamicSkill() {
    const router = useRouter();
    const { skillsid } = router.query;

    return <h1>Dynamic Skill Page: {skillsid} </h1>;
}

export default DynamicSkill;