import PageFooter from "../../../../components/pageFooter";
import PageHeader from "../../../../components/pageHeader";

const TakePaymentForm = (props: { takePaymentData: ITakePaymentData }) => (
  <>
    <PageHeader />
    <section id="StorageSpec">
      <div className="techSectionHeader text-start">
        {props.takePaymentData?.planName}
      </div>
      <br />
      <br />
      <p>
        This is a temporary page that is just showing where payment will be
        taken.
      </p>
      <br />
      <br />
      <br />
      <h3>Take Payment</h3>
      <h2>£{props.takePaymentData?.planCost}</h2>
      <p>{props.takePaymentData?.planPayInterval}</p>
      <br />
      <a href={"/thank-you"} className="btn btn-primary">
        OK
      </a>
      <br />
      <br />
      <br />
    </section>

    <PageFooter />
  </>
);

export default TakePaymentForm;
