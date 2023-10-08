import React from 'react'

const Contact = () => {
	return (
		<>
			<div class="contact">

				{/* <!-- Contact Map --> */}

				<div class="contact_map">

					{/* <!-- Google Map --> */}

					<div class="map">
						<div id="google_map" class="google_map">
							<div class="map_container">
								<div id="map">
									<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.48630826064!2d80.2084532!3d13.0119935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673f8c401dd7%3A0x898caf0f796f5326!2sIQVIA!5e0!3m2!1sen!2sin!4v1696312919611!5m2!1sen!2sin" style={{ border: 0, width: "100%", height: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Contact Info --> */}

				<div class="contact_info_container">
					<div class="container">
						<div class="row">

							{/* <!-- Contact Form --> */}
							<div class="col-lg-6">
								<div class="contact_form">
									<div class="contact_info_title">Contact Form</div>
									<form action="#" class="comment_form">
										<div>
											<div class="form_title">Name</div>
											<input type="text" class="comment_input" required="required" />
										</div>
										<div>
											<div class="form_title">Email</div>
											<input type="text" class="comment_input" required="required" />
										</div>
										<div>
											<div class="form_title">Message</div>
											<textarea class="comment_input comment_textarea" required="required"></textarea>
										</div>
										<div>
											<button type="submit" class="comment_button trans_200">submit now</button>
										</div>
									</form>
								</div>
							</div>

							{/* <!-- Contact Info --> */}
							<div class="col-lg-6">
								<div class="contact_info">
									<div class="contact_info_title">Contact Info</div>
									<div class="contact_info_text">
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a distribution of letters.</p>
									</div>
									<div class="contact_info_location">
										<div class="contact_info_location_title">Location</div>
										<ul class="location_list">
											<li>C28, 5th Floor, South Wing, SKCL, Central Square I</li>
											<li>35, Cipet Rd, Thiru Vi Ka Industrial Estate</li>
											<li>Guindy, Chennai, Tamil Nadu 600032</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact