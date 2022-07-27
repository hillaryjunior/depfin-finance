import Head from 'next/head'
import React from 'react'
import PolicyLayout from '../Layouts/PolicyLayout';

function terms() {
  const html = `
  <p>
    1. Application and binding nature of these Terms of Use
</p>
<p>
    The terms and conditions that are set out below (“T&amp;Cs”) will apply
    whenever you access and use our website.
</p>
<p>
    By using this website, you acknowledge that you have read and understood
    these T&amp;Cs and agree to be bound by them. In terms of the Electronic
    Communications and Transactions Act of 2002, as amended, these T&amp;Cs
    arebinding and legally enforceable against you. Please do not use our
    website if you do not agree to be bound by these T&amp;Cs.
</p>
<p>
    2. Amendment of these T&amp;Cs
</p>
<p>
    We may, from time to time, update or change these T&amp;Cs, the content of,
    or available services on, our website or make technical changes, without
    any notice to you. We recommend that you read these T&amp;Cs every time you
    access and use our website. Amended T&amp;Cs will bear a different version
    number on the footer of each page of these T&amp;Cs and will supersede and
    replace any previous T&amp;Cs.
</p>
<p>
    3. Ownership of website
</p>
<p>
    The Depfin Finance website depfinfinance.co.za is owned by Depfin Finance
    (Pty) Ltd, a member of the Depfin Finance group ( Depfin Finance) with its
    registered address at Golf Park 6, Golf Park, Raapenberg Road, Mowbray,
    Cape Town. All of our rights and/or defences as set out in these T&amp;Cs
    shall be for the benefit of our group of companies.
</p>
<p>
    4. Use of our website
</p>
<p>
    4.1 You may view, download or print information that is available on our
    website, provided that you do so for your own personal purposes and not for
    commercial purposes.
</p>
<p>
    4.2 You may also make use of any of our online services, such as the online
    credit application procedure and the online Quick Check.
</p>
<p>
    4.3 You may not use our website for (including, without limitation)
    illegal, offensive, nuisance or damaging purposes; or to create, store or
    send unsolicited communications.
</p>
<p>
    4.4 The creation of any links to our website from any other site whatsoever
    is strictly prohibited.
</p>
<p>
    4.5 Copyright and trademark rights may subsist in some or all of the
    content on our website. Unauthorised use, reproduction, copying,
    dissemination, modification and/or distribution is strictly prohibited and
    constitutes an infringement of our or our retail partners’ intellectual
    property right.
</p>
<p>
    4.6 We reserve the right to restrict your use and access to our website or
    part thereof in the event of any unauthorized use.
</p>
<p>
    5. Disclaimers and exclusions of liability
</p>
<p>
    5.1 When you use our website, you do so entirely at your own risk. We
    cannot be held liable for any damage or loss sustained by you, or a third
    party, arising out of your access or use of our website, or reliance on any
    information contained thereon. You indemnify us accordingly.
</p>
<p>
    5.2 All reasonable steps are taken to ensure that the information on our
    website is accurate, complete and up-to-date. We do not, however, warrant
    that the content or information displayed is always accurate, complete
    and/or current.
</p>
<p>
    5.3 We do not warrant that the functions provided by the website will be
    uninterrupted or error free, or that the website or the server that makes
    it available is free from viruses or other harmful components.
</p>
<p>
    6. Privacy &amp; information security policy
</p>
<p>
    6.1 Any information that you upload on our website will be stored on a
    secure server. Our secure server encrypts your personal details in order to
    minimise the risk of unauthorised disclosure or interception.
</p>
<p>
    6.2 We will deal with your information only as directed by you or in
    accordance with current legislation that applies to us.
</p>
<p>
    6.3 Whilst all reasonable efforts are taken to ensure that your personal
    information is protected as they travel over the internet, we cannot
    guarantee the absolute security of any information you exchange with us.
</p>
<p>
    6.4 When using our online Quick Check tool, you give us permission to use
    your information in order to market our products and/or services, as well
    as any other products and/or services that we believe may be of interest to
    you. If you do not wish to be marketed to, simply call us to opt-out of any
    further marketing messages.
</p>
<p>
    6.5 Depfin Finance (in conjunction with Google Analytics and Display
    Advertising, including but not limited to Remarketing, Google Display
    Network Impression Reporting, DoubleClick, and Google Analytics
</p>
<p>
    Demographics and Interest Reporting services) makes use of cookies to
    gather anonymous data about your interaction with our website and other
    websites. No personal identification information, such as your name or
    email address, is ever required or stored in this process, and your details
    are never sold to any third party. The data helps us to deliver advertising
    and content that is more relevant to you and your interests, but can be
    disabled at any time by visiting www.google.com/settings/ads and changing
    your preferences. More information about this can be found at
    https://support.google.com/ads/answer/2662922?hl=en.
</p>
<p>
    7. Hyperlinks &amp; advertising
</p>
<p>
    7.1 External hyperlinks may appear on our website from time to time. This
    does not mean that there is any relationship between us and any linked
    third party, nor do we necessarily endorse any such third party, its
    products and/or services or the security of their website. By using the
    link, you do so entirely at your own risk.
</p>
<p>
    7.2 Advertising and other promotional material of third parties may appear
    on our website from time to time.
</p>
<p>
    We do not endorse such third parties or their products and/or services.
    Unless the information originates from us, your reliance on any information
    contained in such material is entirely at your own risk.
</p>
<p>
    8. Law &amp; arbitration This agreement is governed by the laws of the
    Republic of South Africa, irrespective of whether or not you are South
    African or are accessing our website outside of the Republic of South
    Africa. Any dispute arising in relation to our agreement with you shall, to
    the extent permitted by law, be referred to arbitration in Cape Town at a
    venue to be determined by us applying the rules of the Arbitration
    Foundation of South Africa.
</p>
<p>
    9. General
</p>
<p>
    9.1 Without detracting from the provisions of your account terms and
    conditions, if applicable, these T&amp;Cs constitute the sole record of the
    agreement between you and Depfin Finance in relation to your use of this
    Website; provided that where you are using the online self-service portal
    on our website, these T&amp;Cs will apply together with the Depfin Finance
    Self-Service Portal Terms &amp; Conditions.
</p>
<p>
    9.2 No indulgence or extension of time which either you or Depfin Finance
    may grant to the other will constitute awaiver of or, whether by estoppel
    or otherwise, limit any of the existing or future rights of the grantor in
    terms hereof, save in the event or to the extent that the grantor has
    signed a written document expressly waiving or limiting such rights.
</p>
<p>
    9.3 Depfin Finance shall be entitled to cede, assign and delegate all or
    any of its rights and obligations in terms ofthese T&amp;Cs without notice
    to you.
</p>
<p>
    9.4 All provisions of these T&amp;Cs are, notwithstanding the manner in
    which they have been grouped together or linked grammatically, severable
    from each other. Any provision of these T&amp;Cs which is or becomes
    unenforceable, whether due to voidness, invalidity, illegality,
    unlawfulness or for any reason whatever, shall, only to the extent that it
    is so unenforceable, be treated as not having been written and the
    remaining provisions of these T&amp;Cs shall remain in full force and
    effect.
</p>
  `;
  return (
    <div>
      <Head>
        <title>Terms & Conditions - Depfin Finance</title>
        <meta
          name="description"
          content="Read our terms and conditions carefully. If you have any questions or concerns about the Depfin Finance loan please contact us immediately."
        />
      </Head>
      <PolicyLayout title="Website terms of use" content={html} />
    </div>
  );
}

export default terms