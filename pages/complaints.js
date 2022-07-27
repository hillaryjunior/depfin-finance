import Head from "next/head";
import React from "react";
import PolicyLayout from "../Layouts/PolicyLayout";

function complaints() {
  const html = `<div>
    <p>
        1. INTRODUCTION
    </p>
    <p>
        Depfin Finance and Loan (Pty) Ltd (“Depfin”), is an authorised
        financial services provider that provides financial advice and renders
        intermediary services to clients on financial products under a license
        issued in terms of the Financial Advisory and Intermediary Services
        Act, Act 37 of 2002 (FAIS). Depfin has certain specific duties to the
        clients. One of these duties is to offer the client a formal complaints
        resolution system, which will enable them to exercise their rights as
        provided for in FAIS.
    </p>
    <p>
        Depfin is committed to effective corporate governance and to maintain a
        high level of integrity when dealing with our clients. By doing this,
        we ensure that our clients are treated fairly and are satisfied with
        our service. Unfortunately, it may occur that a client is dissatisfied
        with the level of service or conduct of Depfin, in which instance a
        complaint may be lodged to resolve this.
    </p>
    <p>
        2. PURPOSE, SCOPE AND OBJECTIVES
    </p>
    <p>
        The purpose of this document is to inform the client of how they can
        make use of Depfin complaints resolution system, to their advantage. In
        terms of the General Code of Conduct, a Financial Services Provider
        (FSP) must maintain an internal complaints resolution procedure in the
        event that a client complains about a financial service rendered by the
        FSP or a Representative of the FSP.
    </p>
    <p>
        We pride ourselves in our superior service to our customers, including
        the resolution of complaints in a transparent and effective manner. We
        are committed to resolve complaints by means of a fair and practical
        resolution process and in the event that we are at fault, we aim for
        full and appropriate redress without delay. In the event that we need
        to offer redress where a complaint has not been dealt with correctly,
        we will try to satisfy all of our customers accordingly, even if you
        haven’t complained.
    </p>
    <p>
        3. DEFINITIONS
    </p>
    <p>
        3.1“complaint”means any oral or written expression of dissatisfaction
        or unfairness, whether justified or not, relating to any product,
        marketing, service, administration, claim or agreement with a financial
        institution.
    </p>
    <p>
        3.2 “Ombud” means the Ombud for Financial Services Providers appointed
        in terms of FAIS and includes the deputy Ombud.
    </p>
    <p>
        4. PROCESS TO SUBMIT A COMPLAINT
    </p>
    <p>
        4.1 COMPLAINT HAS TO BE IN WRITING
    </p>
    <p>
        In order for a complaint to receive the attention that it deserves, we
        request that your complaint is submitted to us in writing. Please
        ensure, that where the complaint is delivered by hand or by any other
        means, that you retain proof of delivery. Complaints submitted via
        email should be sent to depfinfinance@safrica.com
    </p>
    <p>
        4.2 INFORMATION REQUIRED WHEN SUBMITTING A COMPLAINT
    </p>
    <p>
        In order for Depfin to effectively and swiftly resolve a complaint,
        please ensure that the following information is included and complete
        when submitting a complaint:
    </p>
    <p>
        Client name and surname
    </p>
    <p>
        Client email address
    </p>
    <p>
        Client cell phone number
    </p>
    <p>
        Depfin representative related to the complaint
    </p>
    <p>
        Depfin branch that is related to the complaint
    </p>
    <p>
        Date on which the complaint arose
    </p>
    <p>
        Nature of the complaint
    </p>
    <p>
        4.3 COMPLAINT HAS TO BE RELEVANT
    </p>
    <p>
        We will endeavour to address all reasonable requests from our clients,
        but may also refer you to a more appropriate facility. Where the
        complaint pertains to any aspect of our service, or any disclosures
        that ought to be made by us, we will endeavour to address those
        complaints in writing, within 30 working days.
    </p>
    <p>
        In instances where the complaint pertains to something not within our
        control, such as product information or investment performance we will
        forward the complaint to the product provider concerned.
    </p>
    <p>
        4.4 HOW THE COMPLAINT WILL BE PROCESSED
    </p>
    <p>
        The following is a step-by-step guideline of how a complaint will be
        dealt with, once received by us:
    </p>
    <p>
        The complaint will be lodged in our central complaints register on the
        same day that it is made and confirmation of receipt forwarded to you.
    </p>
    <p>
        The complaint is immediately brought to the attention of the Key
        Individual of Depfin for allocation to a trained and skilled person who
        specialises in that type of complaint.
    </p>
    <p>
        The complaint will be investigated and we will revert to you with our
        findings within 30 working days.
    </p>
    <p>
        In the event that you are not satisfied with our solution, you may
        refer the complaint to the Managing Director of our business. The
        Managing director may amend the solution or confirm it. Please be
        informed that certain decisions may have to be approved by the Board or
        Management committee of the organisation. In such a case, we will
        communicate that fact to you, as well as the date on which a decision
        will be taken.
    </p>
    <p>
        In the event of us not reverting to you within the time periods
        indicated above, kindly contact the Insurance Manager, 0112197194, in
        this regard. Please do not accept any communication from any person
        until it has been confirmed in writing.
    </p>
    <p>
        5. REFERRAL TO THE FAIS OMBUD FOR FSP
    </p>
    <p>
        If, after having referred the complaint to the Managing Director, you
        are still not satisfied with the outcome, we will regard the complaint
        as being unsatisfactorily resolved. In such a case, you may approach
        the office of the Ombud for Financial Services Providers or take such
        other steps as may be advised by your legal representatives.
    </p>
    <p>
        The referral to the office of the Ombud must be done in accordance with
        the provisions of section 27 of the FAIS Act and the rules promulgated
        in terms of that section. In instances where we have not been able to
        arrive at a resolution within six weeks after you have lodged your
        complaint, the matter may automatically be referred to the Ombud.
    </p>
    <p>
        If a complaint has not been resolved within 6 weeks or where the
        complaint has been dismissed or where the client is not satisfied with
        the results of the investigation into the complaint; the client may,
        within 6 months of such feedback from the FSP refer the complaint to
        the Ombud for Financial Services Providers (FAIS Ombud).
    </p>
    <p>
        The Ombud will not adjudicate in matters exceeding a value of
        R800,000.00.
    </p>
    <p>
        The Ombud may be contacted at his offices in Pretoria, at the following
        address:
    </p>
    <p>
        The Consumer Contact Division
    </p>
    <p>
        The FAIS Ombudsman
    </p>
    <p>
        Baobad House, Pretoria
    </p>
    <p>
        Postal Address:
    </p>
    <p>
        P.O. Box 74574, Lynwood Ridge.
    </p>
</div>`;
  return (
    <div>
      <Head>
        <title>Complaints Management - Depfin Finance </title>
        <meta
          name="description"
          content="Depfin Finance is one of the trusted companies where clients can file complaints in case of any grievance with the company or employee. "
        />
      </Head>
      <PolicyLayout title="Complaints Management" content={html} />
    </div>
  );
}

export default complaints;
