
let nav = document.getElementById('navbar');


nav.innerHTML = `<div class="container-fluid">
      <div class="row">
        <nav class="navbar bgcol_pri navbar-expand-sm nav-hide">
          <div class="container-fluid justify-content-center">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link top-nav-text" aria-current="page" href="#">DBIT Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="http://parent.dbit.in/"
                  >Parent Login</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://alumni.dbit.in/">Alumni</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://moodle.dbit.in/">Moodle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://elearn.dbit.in/">E-Learn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="http://dbitlrc.dbit.in/">Library</a>
              </li>
              <li class="nav-item">
                <a class="nav-link top-nav-text" href="https://dbcldrive.dbit.in/"
                  >DBCL Drive</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="row">
        <img class="p-0" src="/assets/final.jpg" alt="" srcset="" />
      </div>
    </div>

    <header class="sticky-top bgcol_pri" style="z-index: 10">
      <nav
        class="navbar navbar-expand-xl container-fluid justify-content-between"
      >
          <button
          class="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav  flex-grow-1 pe-3 offcanvas-nav">
              <li class="nav-item text-center">
                <a class="nav-link" aria-current="page" href="/index.html">HOME</a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="/aboutus/aboutus.html">ABOUT US</a>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACADEMICS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/academics/academic-calendar.html">Academic Calender</a>
                  </li>
                  <li><a class="dropdown-item" href="/academics/exam-calendar.html">Exam Timetable</a></li>
                  <li><a class="dropdown-item" href="/academics/academic_syllabus.html">Syllabus</a></li>
                  <li><a class="dropdown-item" href="/academics/rankholders.html">Rank Holders</a></li>
                  <li><a class="dropdown-item" href="/academics/Co-operator_Adivsory.html">Co-operate Advisory Board</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FACULTY
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/faculty/faculty_profile.html">Profile</a>
                  </li>
                  <li><a class="dropdown-item" href="/faculty/faculty_recognition.html">Recognition</a></li>
                  <li><a class="dropdown-item" href="/faculty/faculty_reasearch.html">Research</a></li>
                  <li><a class="dropdown-item" href="/faculty/faculty_minorgrants.html">Minor Grants</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STUDENTS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="nav-item dropdown text-center">
                  <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  Under Graduate Projects
                </a>
                <ul class="dropdown-menu-undergraduate" aria-labelledby="navbarDropdown" style="left:206px; top:0%;">
                  <li>
                    
                    <a class="dropdown-item" href="/students/secondyear.html">Second Year Projects</a>
                  </li>
                  <li><a class="dropdown-item" href="/students/thirdyear.html">Third Year Projects</a></li>
                  <li><a class="dropdown-item" href="/students/fourthyear.html">Fourth Year Projects</a></li>
                </ul>
              </li>
            
                  </li>
                  <li><a class="dropdown-item" href="/students/recognition.html">Recognition</a></li>
                  <li class="nav-item dropdown text-center">
                  <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  University Question Papers
                </a>
                <ul class="dropdown-menu-undergraduate" aria-labelledby="navbarDropdown" style="left:206px; top:0%;">
                  <li>
                    
                    <a class="dropdown-item" href="./uni/secyr.html">Second Year Projects</a>
                  </li>
                  <li><a class="dropdown-item" href="/uni/thirdyr.html">Third Year Projects</a></li>
                  <li><a class="dropdown-item" href="/uni/fourthyr.html">Fourth Year Projects</a></li>
                </ul>
              </li>
                  
              </li>
                </ul>
              </li>
              <div class="offcanvas-body">
              <ul class="navbar-nav  flex-grow-1 pe-3 offcanvas-nav">
              <li class="nav-item text-center">
                  <a class="nav-link" href="/datascience.html">DATA SCIENCE</a>
                </li>
                </div>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CO-CURRICULAR ACTIVITIES
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/cocurricular/newsletter.html">Newsletter</a></li>
                <li><a class="dropdown-item" href="/cocurricular/events.html">Events</a></li>
                <li><a class="dropdown-item" href="/cocurricular/alumni.html">Alumni Interactions</a></li>
                <li><a class="dropdown-item" href="/cocurricular/acm.html">ACM Student Chapter</a></li>
                <li><a class="dropdown-item" href="/cocurricular/guestsession.html">Guest Session</a></li>
                <li><a class="dropdown-item" href="/cocurricular/Industrial_visit.html">Industrial Visit</a>
                <li><a class="dropdown-item" href="/cocurricular/major_projects.html">Major Projects</a></li>
                <li><a class="dropdown-item" href="/cocurricular/certification.html">Certification/ Workshop/ Outreach Program</a></li>
                <li><a class="dropdown-item" href="/cocurricular/department_day.html">Department Day</a></li>
                <li><a class="dropdown-item" href="/cocurricular/programming.html">Programming Contest</a></li>
                <li><a class="dropdown-item" href="/cocurricular/other.html">Other</a></li>
                </li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PLACEMENT & INTERNSHIP
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href="/placement&internship/intenship.html"
                      >Internship Record</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/placement&internship/placement.html"
                      >Placement Record</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown text-center">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TESTIMONIALS
              </a>
              <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Testimonials/parents.html">Parents</a></li>
              <li><a class="dropdown-item" href="/Testimonials/students.html">Students</a></li>
              </ul>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`