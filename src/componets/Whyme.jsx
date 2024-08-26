import React from 'react'
import { RiSearchEyeLine } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";

import { FaFaceSmileWink } from "react-icons/fa6";
import { MdScreenshotMonitor, MdDesignServices, MdGroups } from "react-icons/md";

function Whyme() {
  return (
    <>
      {/* Reasons */}
      <div className="reasons mt-5">
          <div className="container">
            <div>
            <h2 id="div2" className="reas text-center">
              WHY ME?
            </h2>
            <p className="reas mt-3 text-center">
          What I Offer !!!
        </p>{" "}
        <hr />

            </div>
            
            <div class="row">
              <div class="col-sm-3 mb-3 mb-sm-0">
                <div class="card bg-dark">
                  <div class="card-body" style={{ color: "white" }}>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <MdScreenshotMonitor style={{ height: "50", width: "50" }} />
                    </p>
                    <h5 class="card-title">Full Stack Web Development</h5>
                    <p class="card-text mt-4" style={{ fontWeight: "normal" }}>
                      I specialize in turning ideas into fully functional web
                      applications using the MERN stack. With my skills, I can
                      deliver scalable, efficient, and user-friendly solutions
                      customized to meet your specific needs.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card bg-dark">
                  <div class="card-body" style={{ color: "white" }}>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <MdDesignServices style={{ height: "50", width: "50" }} />
                    </p>
                    <h5 class="card-title">Web Design and Prototypings</h5>
                    <p class="card-text mt-4" style={{ fontWeight: "normal" }}>
                      I blend creativity with technical expertise to design
                      visually appealing and functional websites. My wireframing
                      and prototyping skills ensure your site meets user needs
                      and expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card bg-dark">
                  <div class="card-body" style={{ color: "white" }}>
                  <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <RiSearchEyeLine style={{ height: "50", width: "50" }} />
                    </p>
                    <h5 class="card-title">Critical Thinking & Research</h5>
                    <p class="card-text mt-4" style={{ fontWeight: "normal" }}>
                      My strong critical thinking and research abilities enable
                      me to analyze problems deeply and develop innovative
                      solutions. I can identify issues, gather relevant
                      information, and overcome challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card bg-dark">
                  <div class="card-body" style={{ color: "white" }}>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <MdGroups style={{ height: "50", width: "50" }} />
                    </p>
                    <h5 class="card-title">Teamwork & Problem-Solving</h5>
                    <p class="card-text mt-4" style={{ fontWeight: "normal" }}>
                      By providing a comprehensive visual representation of
                      hostels and empowering users with information, Hostel
                      Harbor enhances the overall hostel experience, making your
                      stay more enjoyable and stress-free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Whyme
