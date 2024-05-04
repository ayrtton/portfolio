import socialProofSection from "../assets/images/social_proof_section.jpg";
import socialLinksProfile from "../assets/images/social_links_profile.jpg";
import fourCardFeatureSection from "../assets/images/four_card_feature_section.jpg";
import blogPreviewCard from "../assets/images/blog_preview_card.jpg";

function Projects() {
    return (
        <div className="projects">
            <h1 className="projects__header">Projects</h1>
            <div className="projects__list">
                <div className="projects__list-row">
                    <div className="projects__list-item">
                        <img className="projects__list-image" src={socialProofSection} alt="Social Proof Section Project" srcSet="" />
                        <a className="projects__list-title" href="https://github.com/ayrtton/social-proof-section" target="blank" rel="noreferrer">Social Proof Section</a>
                    </div>
                    <div className="projects__list-item">
                        <img className="projects__list-image" src={socialLinksProfile} alt="Social Links Profile Project" srcSet="" />
                        <a className="projects__list-title" href="https://github.com/ayrtton/social-links-profile" target="blank" rel="noreferrer">Social Links Profile</a>
                    </div>
                </div>
                <div className="projects__list-row">
                    <div className="projects__list-item">
                        <img className="projects__list-image" src={fourCardFeatureSection} alt="Four Card Feature Section Project" srcSet="" />
                        <a className="projects__list-title" href="https://github.com/ayrtton/four-card-feature-section" target="blank" rel="noreferrer">Four Card Feature Section</a>
                    </div>
                    <div className="projects__list-item">
                        <img className="projects__list-image" src={blogPreviewCard} alt="Blog Preview Card Project" srcSet="" />
                        <a className="projects__list-title" href="https://github.com/ayrtton/blog-preview-card" target="blank" rel="noreferrer">Blog Preview Card</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;