import { useRouter } from 'next/router';

function DynamicProject() {
    const router = useRouter();
    const { projectid } = router.query;
    
    return <p>Project: {projectid}</p>;
}

export default DynamicProject;