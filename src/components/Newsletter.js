import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			newsletter: 'https://mailchi.mp/3cd9a7bb2a23/equity-march-2020-newsletter-2685517'
		};
	}

	handleClick = async (e) => {
		var newlink = e.target.value;
		    await this.setState({
      newsletter: newlink
      });
		document.getElementById('frame1').src = newlink;
	};
	render() {
		return (
			<article>
				<div class="container-fluid">
					<div class="largeScreen">
							<div>
								<div class="make-me-sticky side_menu">
									<button
										onClick={this.handleClick}
										value="https://mailchi.mp/3cd9a7bb2a23/equity-march-2020-newsletter-2685517"
									>
										May 2020
									</button>
									<hr />
									<button
										onClick={this.handleClick}
										value="https://mailchi.mp/8dc221052397/equity-march-2020-newsletter"
									>
										March 2020
									</button>
									<hr />
									<button
										onClick={this.handleClick}
										value="https://mailchi.mp/6f9f20a5ef9f/equity-global-scholars-newsletter"
									>
										February 2020
									</button>
									<hr />
									<button
										onClick={this.handleClick}
										value="https://mailchi.mp/db50b439e234/egs-september-newsletter"
									>
										September 2019
									</button>
									<hr />
									<button
										onClick={this.handleClick}
										value="https://mailchi.mp/2af8f0fdb589/egs-april-newsletter"
									>
										April 2019
									</button>
									<hr />
									<button
										onClick={this.handleClick}
										value="https://mailchi.mp/58d848345f4a/egs-february-newsletter"
									>
										February 2019
									</button>
									<hr />
									<button
										onClick={this.handleClick}
										value="https://mailchi.mp/be37b73255e7/egs-january-newsletter"
									>
										January 2019
									</button>
									<hr />
								</div>
							</div>
							<div>
								<Iframe url={this.state.newsletter} id="frame1"/>
							</div>
					</div>
					<div class="smallScreen">
							<div>
								<label for="newsletters">Choose newsletter:</label>
								<select name="newsletters" onChange={this.handleClick} value={this.state.newsletter}>
  <option value="https://mailchi.mp/3cd9a7bb2a23/equity-march-2020-newsletter-2685517">May 2020</option>
									<option value="https://mailchi.mp/8dc221052397/equity-march-2020-newsletter">March 2020</option>
									<option value="https://mailchi.mp/6f9f20a5ef9f/equity-global-scholars-newsletter">February 2020</option>
									<option value="https://mailchi.mp/db50b439e234/egs-september-newsletter">September 2019</option>
									<option value="https://mailchi.mp/2af8f0fdb589/egs-april-newsletter">April 2019</option>
									<option value="https://mailchi.mp/58d848345f4a/egs-february-newsletter">February 2019</option>
									<option value="https://mailchi.mp/be37b73255e7/egs-january-newsletter">January 2019</option>
								</select>
							</div>
							<div>
								<Iframe url={this.state.newsletter} id="frame1"/>
							</div>
					</div>
				</div>
			</article>
		);
	}
}

export default Posts;