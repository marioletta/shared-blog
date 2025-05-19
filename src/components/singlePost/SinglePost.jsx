import "./singlePost.css"

export default function SinglePost() {
    return(
        <>

            <div className="singlePost">

                <div className="singlePostWrapper">

                    <div className="singlePostInfo">
                        <div className="singlePostHeader">
                            <div className="singlePostHeaderOverlay"></div>
                            <div className="singlePostHeaderTitles">
                                <span className="singlePostHeaderTitleLg">Feed Your Soil, Feed Your Veggies: </span><br/>
                                <span className="singlePostHeaderTitleSm">The Secret to a Thriving Vegetable Garden</span>
                            </div>
                            <img className="singlePostHeaderImg" src="https://img.freepik.com/free-vector/new-normal-hobby-doodle-vector-with-plant-parent_53876-140948.jpg?ga=GA1.1.2017358606.1747576772&semt=ais_hybrid&w=740"  alt=""/>
                        </div>

                        <div className="singlePostSubHeader">
                            <div className="singlePostCategories">
                                <span className="singlePostCategory">Vegetable Gardening</span>
                                <span className="singlePostCategory">Soil & Composting</span>
                                <span className="singlePostDate">1 hour ago</span>

                            </div>
                            <div className="singlePostEdit">
                                <i className="sidebarSocialIcon fa-solid fa-pen-to-square"></i>
                                <i className="sidebarSocialIcon fa-solid fa-trash"></i>
                            </div>
                        </div>


                        <div className="singlePostContent">
                            <p>Growing your own vegetables isn’t just about planting seeds and watering them—it's about building a living, breathing ecosystem right beneath your feet. The health of your soil is the foundation of every successful vegetable garden. In this post, we’ll explore how enriching your soil naturally through composting can lead to tastier, more nutritious vegetables. </p>
                            <span className="contentSubHeading">🌿  Why Soil Health Matters</span><br/>
                            <p>
                                Healthy soil is full of life: bacteria, fungi, worms, and other microorganisms work together to break down organic matter and make nutrients available to your plants. Without this balance, your vegetables may survive—but they won’t thrive.
                                <br/>
                                <br/><span>Poor soil means:</span>
                                <ul>
                                    <li>Stunted growth</li>
                                    <li>Low yields</li>
                                    <li>Increased susceptibility to pests and disease</li>
                                </ul>
                                But the good news? You can fix that with compost.
                            </p>
                            <span className="contentSubHeading">♻️ Compost: Nature’s Fertilizer</span><br/>
                            <p>
                                Compost is decomposed organic material like food scraps, leaves, and garden waste. When added to your garden, it:
                                <ul>
                                    <li>Improves soil structure</li>
                                    <li>Boosts nutrient content</li>
                                    <li>Retains moisture</li>
                                    <li>Encourages beneficial microbes</li>
                                </ul>
                            </p>
                            <span className="contentSubHeading">🌻 Final Thought</span><br/>
                            <p>
                                When you feed your soil, you’re not just helping your vegetables grow—you’re creating a more sustainable, self-sufficient garden. The best part? Your food will taste better and be better for you, straight from soil that’s as alive as the plants it supports.
                                <br/><br/>Happy growing!
                            </p>
                        </div>
                    </div>

                </div>
            </div>




        </>

    )
}