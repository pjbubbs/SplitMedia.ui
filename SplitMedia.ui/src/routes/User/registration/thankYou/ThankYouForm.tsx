import PageFooter from "../../../../components/pageFooter";
import PageHeader from "../../../../components/pageHeader";

const ThankYouForm = () => (
  <>
    <PageHeader />
    <section id="StorageSpec">
      <div className="techSectionHeader text-start">Thank You!</div>
      <br />
      <br />
      <br />
      <br />
      <h3>
        Thanks for signing up with us, we hope you enjoy your CredoB experience.
      </h3>
      <br />
      <br />
      <a href={"/dashboard"} className="btn btn-primary">
        OK
      </a>
      <br />
      <br />
      <br />
    </section>

    <PageFooter />
  </>
);

export default ThankYouForm;
