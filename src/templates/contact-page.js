import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'

const isBrowser = typeof window !== 'undefined';
//const IntercomScript = isBrowser ? require( '../../static/post-to-intercom.js') : undefined;

const labelStyles = {
  fontSize: 14,
  textTransform: 'uppercase',
  letterSpacing: 2,
  display: 'inline-block',
};

const isValidElement = element => {
  return element.name; //we want to return element even if values are empty
  //return element.name && element.value;
};

const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

const isCheckbox = element => element.type === 'checkbox';

const isMultiSelect = element => element.options && element.multiple;

const getSelectValues = options => [].reduce.call(options, (values, option) => {
  return option.selected ? values.concat(option.value) : values;
}, []);

/**
* Retrieves input data from a form and returns it as a JSON object.
* @param  {HTMLFormControlsCollection} elements  the form elements
* @return {Object}                               form data as an object literal
*/
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

  // Make sure the element has the required properties and should be added.
  if (isValidElement(element) && isValidValue(element)) {

      /*
      * Some fields allow for more than one value, so we need to check if this
      * is one of those fields and, if so, store the values as an array.
      */
     if (isCheckbox(element)) {
          data[element.name] = (data[element.name] || []).concat(element.value);
      } else if (isMultiSelect(element)) {
          data[element.name] = getSelectValues(element);
      } else {
          data[element.name] = element.value;
      }
  }

  return data;
}, {});


/**
* A handler function to prevent default submission and run our custom script.
* @param  {Event} event  the submit event triggered by the user
* @return {void}
*/
const handleFormSubmit = event => {

  event.preventDefault();

  // Get the form data.
  const data = formToJSON(contactForm.elements);

  //If intercom has loaded, add the current visitor id
  const isIntercom = typeof Intercom !== 'undefined';
  data.user_id = isIntercom ? Intercom('getVisitorId') : null;

  // Super simple validation. Need to improve. Only Referrer isn't required
  if (data.firstname == '' ||
      data.email == '' ||
      data.phone == '' ||
      data.organization == '' ||
      data.website == '' ||
      data.attendance == '' ||
      data.city == '' ||
      data.state == '' ||
      data.referrerType == '' ||
      data.chms == ''
  ) {

  // Return error message
  const errorMessage = document.getElementById('error');
  errorMessage.textContent = 'Please fill in all information so we can best help you!';
  errorMessage.style.display === "block";

  // Send user to top of form to see error message
  location.replace('#form');

  return false;

  } else {
    // Post data to intercom,
    // see if a lead exists with the entered email,
    // and convert to user if found
    console.log(data)
    fetch(process.env.GATSBY_CONTACT_FORM_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data, null, "  ")
      }
    ).then(response => response.json())
    .then(response => {

        // Redirect on success. Do something(?) on fail?
        const statusMessage = document.getElementById('statusMessage');

        statusMessage.textContent = response.message + ". ";
        statusMessage.style.display = "block";

        if (response.status == 404) {
            statusMessage.style.color = "red";
        }
        if (response.status == 200) {
            statusMessage.style.color = "grey";
            // Redirect to the completed page
            window.location.href = '/completed';
        }
    })
    .catch(error => console.error('Error:', error))
  }
};

export const ContactPageTemplate = ({ title, content, subtitle, image, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <Header
        title={title}
        subtitle={subtitle}
        image={image}
        helpcenter="true"
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 is-bold-light">
                  Get In Touch
                </h2>
                
                      <p id="error"
                        style={{
                          color: 'red'
                         }}
                        ></p>


                  <form id='contactForm' method="post" onSubmit={handleFormSubmit} >
                    <fieldset>
                      <div>
                        <label style={labelStyles}>First Name</label>
                        <input type="text" name='firstname'/>
                      </div>

                      <div>
                        <label style={labelStyles}>Last Name</label>
                        <input type="text" name='lastname'/>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div>
                        <label style={labelStyles}>Email</label>
                        <input type="text" name='email'/>
                      </div>

                      <div>
                        <label style={labelStyles}>Phone Number</label>
                        <input type="text" name='phone'/>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div>
                        <label style={labelStyles}>Organization Name</label>
                        <input type="text" name='organization'/>
                      </div>

                      <div>
                        <label style={labelStyles}>Organization Website</label>
                        <input type="text" name='website'/>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div>
                        <label style={labelStyles}>Average Weekly Attendance</label>
                        <input type="text" name='attendance'/>
                      </div>
                      {/* <div>
                        <label style={labelStyles}></label>
                        <input type="text" name=''/>
                      </div> */}
                    </fieldset>

                    <fieldset>
                      <div>
                        <label style={labelStyles}>City</label>
                        <input type="text" name='city'/>
                      </div>

                      <div>
                        <label style={labelStyles}>State/Region</label>
                        <input type="text" name='state'/>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div>
                        <label style={labelStyles}>How did you hear about My Well?</label>
                        <select name="referrerType">
                          <option value="" defaultValue>Please select one</option>
                          <option value="A friend">A friend</option>
                          <option value="Business Referral">Business Referral</option>
                          <option value="Conference">Conference</option>
                          <option value="Email">Email</option>
                          <option value="Existing Account">Existing Account</option>
                          <option value="Online Search">Online Search</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Software Company">Software Company</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyles}>What was the specific source?</label>
                        <input type="text" name='referrer'/>
                      </div>
                    </fieldset>

                    <fieldset>
                      <label style={labelStyles}>What church management software platform (ChMS) do you use (if any)?</label>
                      <select name="chms">
                        <option value="" defaultValue>Please select one</option>
                        <option value="ACS">ACS</option>
                        <option value="ACS Realm">ACS Realm</option>
                        <option value="Breeze">Breeze</option>
                        <option value="CCB">CCB</option>
                        <option value="Church Teams">Church Teams</option>
                        <option value="EasyTithe">EasyTithe</option>
                        <option value="eGiving">eGiving</option>
                        <option value="Elexio">Elexio</option>
                        <option value="Fellowship One">Fellowship One</option>
                        <option value="GivingFuel">GivingFuel</option>
                        <option value="Kindrid">Kindrid</option>
                        <option value="ministry platform">Ministry Platform</option>
                        <option value="OnlineGiving">OnlineGiving.org</option>
                        <option value="Paypal">Paypal</option>
                        <option value="PCO Giving">PCO Giving</option>
                        <option value="Planning Center">Planning Center</option>
                        <option value="MoGiv">MoGiv</option>
                        <option value="Rock RMS">Rock RMS</option>
                        <option value="SecureGive">SecureGive</option>
                        <option value="Seraphim">Seraphim</option>
                        <option value="ServiceU">ServiceU</option>
                        <option value="Shelby Arena">Shelby Arena</option>
                        <option value="Shelby Next">Shelby Next</option>
                        <option value="Simple Donation">Simple Donation</option>
                        <option value="Subsplash">Tithely</option>
                        <option value="The City">The City</option>
                        <option value="Touchpoint">Touchpoint</option>
                        <option value="Txt2Give">Txt2Give</option>
                        <option value="Other">Other</option>
                      </select>
                    </fieldset>
                    <p id="statusMessage"></p>
                    <input
                      id="formSubmit"
                      type="submit"
                      value="Submit"
                      />
                  </form>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      image={post.frontmatter.image}
      content={post.html}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const aboutPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        image
      }
    }
  }
`
