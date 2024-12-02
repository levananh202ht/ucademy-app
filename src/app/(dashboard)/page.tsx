import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/tepography/Heading";
import createUser from "@/lib/actions/user.action";



export default async function Page() {

    const user = await createUser({
        clerkId: "clerk_123",
        email_address: "anh202@gmail.com",
        username: "leanh," 
    })
    return (
        <div>
            <Heading>Khám phá</Heading>
            <CourseGrid>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
            </CourseGrid>
        </div>
    )
};
