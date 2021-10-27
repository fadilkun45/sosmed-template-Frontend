import MakePost from "../component/Home/MakePost"
import Post from "../component/Home/Post"
import test from "../assets/img/dumny.jpeg"

const Home = () => {
    return (
        <div className="container">
            <MakePost />
            <div className="w-11/12 mx-auto mb-12 mt-2">
                <Post textpost={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, laudantium."}/> 
                <Post image={test} textpost={"lagi jalan jalan sama ayang faldi"} />
            </div>
        </div>
    )
}

export default Home
