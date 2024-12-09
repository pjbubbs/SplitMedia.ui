import PageHeader from '../../components/pageHeader'
import PageFooter from '../../components/pageFooter'

const PrivacyPolicy = () => {
  return (
    <>
    <PageHeader/>
    <div className="container">
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how [Your Company Name] ("we," "us," or
        "our") collects, uses, and discloses your personal information when you
        use our website, mobile app, or other online services (collectively, the
        "Service").
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </p>
      <ul>
        <li>Personal Data: We may collect personal data such as your name, email address, phone number, and postal address.</li>
        <li>
          Usage Data: We may also collect usage data such as your browsing
          history, IP address, device type, operating system, and location
          information. This information is typically collected through cookies
          and similar tracking technologies.
        </li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>We use the information we collect for various purposes, including:</p>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To improve the Service</li>
        <li>To personalize your experience</li>
        <li>To send you marketing and promotional communications (with your consent)</li>
        <li>To respond to your inquiries and requests</li>
        <li>For security and compliance purposes</li>
      </ul>
      <h2>Legal Basis for Processing</h2>
      <p>
        We process your personal data based on several legal grounds under the UK GDPR:
      </p>
      <ul>
        <li>
          Consent: We may process your data based on your specific consent for a
          particular purpose.
        </li>
        <li>
          Contract: We may process your data to fulfill our contractual
          obligations with you.
        </li>
        <li>
          Legitimate Interests: We may process your data for our legitimate
          interests, such as improving our Service or providing you with
          marketing materials, provided your interests do not override your
          fundamental rights and freedoms.
        </li>
      </ul>
      <h2>Data Retention</h2>
      <p>
        We will retain your personal data only for as long as necessary for the
        purposes for which it was collected, as required by law, or until you
        request deletion. We will then securely delete or anonymize your data.
      </p>
      <h2>Your Rights</h2>
      <p>
        Under the UK GDPR, you have certain rights regarding your personal data:
      </p>
      <ul>
        <li>
          Right to access: You have the right to request a copy of the personal
          data we hold about you.
        </li>
        <li>
          Right to rectification: You have the right to request that we correct
          any inaccurate or incomplete personal data we hold about you.
        </li>
        <li>
          Right to erasure: You have the right to request that we erase your
          personal data under certain circumstances.
        </li>
        <li>
          Right to restrict processing: You have the right to restrict the
          processing of your personal data under certain circumstances.
        </li>
        <li>
          Right to data portability: You have the right to request that we
          transfer your personal data to another organization or to you in a
          structured, commonly used, and machine-readable format.
        </li>
        <li>
          Right to object: You have the right to object to the processing of
          your personal data under certain circumstances.
        </li>
      </ul>
      <p>
        To exercise these rights, please contact us at [your email address] or
        [your phone number].
      </p>
      <h2>Data Security</h2>
      <p>
        We take reasonable steps to protect your personal data from unauthorized
        access, disclosure, alteration, or destruction. However, no internet
        transmission or electronic storage method is 100% secure. Therefore, we
        cannot guarantee absolute security.
      </p>
      </div>
      </div>
      <PageFooter/>
      </>
  );
};

export default PrivacyPolicy;
