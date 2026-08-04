import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Global Rehabilitation Service's Client Privacy Policy — how we collect, hold, use, and disclose personal information under the Privacy Act 1988.",
  alternates: { canonical: "/privacy-policy" },
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-navy-950">
        {number}. {title}
      </h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}

function SubSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-base font-semibold text-navy-950">
        {number} {title}
      </h3>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Privacy Policy
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Client Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Policy GRS-CPP-06 · Approved by the Board 01/07/2023 · Responsible
            person: GPCC
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-14">
          <Section number="1" title="Introduction">
            <p>
              Global Rehabilitation Service Pty. Ltd (GRS) has responsibility
              to ensure all GRS clients&apos; privacy is well protected
              throughout the course of receiving our service.
            </p>

            <div>
              <p className="font-semibold text-navy-950">
                Who should read this Privacy Policy?
              </p>
              <p className="mt-1">You should read this policy if you are:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  an individual whose personal information may be given to or
                  held by GRS;
                </li>
                <li>a GRS staff member;</li>
                <li>a volunteer or trainee with GRS.</li>
              </ul>
            </div>

            <SubSection number="" title="The Privacy Act 1988">
              <p>
                The Privacy Act 1988 (the Privacy Act) regulates how private
                sector organisations can collect, hold, use and disclose
                personal information, and how you can access and correct that
                information. Personal information is information in any form
                that can identify a living person.
              </p>
              <p>
                The Privacy Act applies only to information about
                individuals, not to information about corporate entities such
                as businesses, firms or trusts. Detailed information on the
                Privacy Act is available on the Office of the Australian
                Information Commissioner (OAIC) website.
              </p>
            </SubSection>

            <SubSection number="1.1" title="GRS and privacy">
              <p>
                This Privacy Policy sets out how GRS complies with the
                Privacy Act. In performing its functions, GRS may collect,
                hold, use or disclose your personal information to a third
                party with your consent. GRS takes privacy seriously and will
                only collect, hold, use and disclose your personal
                information in accordance with the Privacy Act. If GRS does
                not receive personal information about you, the Privacy Act
                will not apply.
              </p>
            </SubSection>

            <SubSection
              number="1.2"
              title="Remaining anonymous or using a pseudonym"
            >
              <p>
                GRS understands that anonymity is an important element of
                privacy, and some members of the public may wish to remain
                anonymous when interacting with GRS. GRS also understands
                some GRS clients may wish to use a pseudonym. Generally, GRS
                clients will have the right to remain anonymous or adopt a
                pseudonym when dealing with GRS. However, it is not always
                possible to remain anonymous or adopt a pseudonym, and GRS
                will inform you when this is the case.
              </p>
            </SubSection>

            <SubSection
              number="1.3"
              title="Information covered under this Privacy Policy"
            >
              <p>
                This Privacy Policy covers how GRS collects, holds, uses and
                discloses your personal information, including any financial
                information you provide to GRS. This Policy applies to all
                personal information collected by GRS, including personal
                information collected through our website and any third party
                service provider (e.g. your GP or support coordinator).
              </p>
            </SubSection>

            <SubSection number="1.4" title="Information held by GRS staff">
              <p>
                Under the Privacy Act, GRS is required to take contractual
                measures to ensure GRS staff (including sub-contractors)
                comply with the same privacy requirements applicable to GRS.
              </p>
            </SubSection>
          </Section>

          <Section
            number="2"
            title="GRS's personal information handling practices"
          >
            <SubSection number="2.1" title="Collection of personal information">
              <p>
                GRS may collect personal information about you from you, your
                representative or a third party. We generally use emails,
                our official website and face-to-face assessment to collect
                this information, and store it securely on our cloud-based
                filing system electronically. GRS may also obtain personal
                information collected by other authorised service providers,
                such as your GP, support coordinator, and previous
                therapeutic support providers.
              </p>
              <p>
                GRS collects and holds a broad range of personal information
                in records relating to:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  employment and personnel matters for GRS staff and
                  contractors (including working with children/vulnerable
                  people screening assessments)
                </li>
                <li>
                  the performance of GRS&apos;s legislative and
                  administrative functions
                </li>
                <li>individuals participating in the NDIS</li>
                <li>the management of contracts and service agreements</li>
                <li>
                  the management of internal audits and external audits
                  required by the NDIS Quality and Safeguards Commission
                </li>
                <li>correspondence from third party service providers</li>
                <li>
                  complaints (including privacy complaints) made and feedback
                  provided to GRS
                </li>
                <li>
                  requests made to GRS under the Freedom of Information Act
                  1982 (Cth)
                </li>
                <li>
                  the provision of legal advice by internal and external
                  lawyers.
                </li>
              </ul>
              <p>
                GRS will not ask you for any personal information which we do
                not need. The Privacy Act requires that we collect
                information for a purpose that is reasonably necessary for,
                or directly related to, a function or activity of GRS.
              </p>
              <p>
                When GRS collects personal information, we are required by
                the Privacy Act to notify you of a number of matters. These
                include the purposes for which we collect the information,
                whether the collection is required or authorised by law, and
                any person or body to whom we usually disclose the
                information. GRS generally provides this notification through
                Privacy Notices before our interventions.
              </p>
            </SubSection>

            <SubSection
              number="2.2"
              title="The NDIS Act also protects personal information"
            >
              <p>
                The secrecy provisions in the NDIS Act also protect personal
                information collected by GRS. These provisions set out rules
                for the collection, use and disclosure of this information,
                and operate together with the rules in the Privacy Act.
              </p>
            </SubSection>

            <SubSection
              number="2.3"
              title="Kinds of personal information collected and held"
            >
              <p>
                In performing its functions, GRS collects and holds the
                following kinds of personal information (which will vary
                depending on the context of the collection):
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>name, address and contact details (e.g. phone, email and fax)</li>
                <li>
                  photographs, video recordings and audio recordings of you
                  with your prior verbal/written consent
                </li>
                <li>
                  information about your personal circumstances (e.g.
                  marital status, age, gender, occupation, accommodation and
                  relevant information about your partner or children)
                </li>
                <li>
                  information about your financial affairs (e.g. your
                  financial intermediary and NDIS plan details)
                </li>
                <li>information about your employment (e.g. work history)</li>
                <li>
                  information about your background (e.g. educational
                  qualifications, the languages you speak and your English
                  proficiency)
                </li>
                <li>government identifiers (e.g. your NDIS reference number)</li>
                <li>information about assistance provided to you under the NDIS.</li>
              </ul>
              <p>
                On occasions, GRS may collect or hold some sensitive
                information about you, including information about:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>your racial or ethnic origin;</li>
                <li>
                  your health (including your medical history and any
                  disability or injury you may have);
                </li>
                <li>
                  the supports or services you receive, including under the
                  NDIS, and information about the people who provide those
                  supports or services to you; and
                </li>
                <li>any criminal record you may have.</li>
              </ul>
            </SubSection>

            <SubSection
              number="2.4"
              title="How GRS collects and holds personal information"
            >
              <p>
                GRS collects personal information through a variety of
                different methods, including:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>paper-based forms</li>
                <li>electronic forms (including online forms)</li>
                <li>face to face meetings</li>
                <li>telephone communications</li>
                <li>email communications</li>
                <li>GRS&apos;s website and social media accounts.</li>
              </ul>
              <p>
                GRS holds personal information in a range of paper-based and
                electronic records. Storage of personal information (and its
                disposal when no longer required) is managed in accordance
                with the Australian Government records management regime,
                including the Archives Act 1983, Records Authorities and
                General Disposal Authorities. This ensures that we hold your
                personal information securely.
              </p>
            </SubSection>

            <SubSection
              number="2.5"
              title="Purposes for which personal information is collected, held, used and disclosed"
            >
              <p>
                GRS collects and holds personal information for a variety of
                purposes relating to its functions and activities, including:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  performing its clinical service, including delivering
                  assessment and intervention
                </li>
                <li>
                  performing its employment and personnel functions in
                  relation to its staff and contractors
                </li>
                <li>performing its legislative and administrative functions</li>
                <li>policy development, research and evaluation</li>
                <li>complaints handling</li>
                <li>service agreement management.</li>
              </ul>
              <p>
                GRS uses and discloses personal information for the primary
                purposes for which it is collected. We will give you
                information about the primary purpose of collection at the
                time the information is collected. GRS will only use your
                personal information for secondary purposes where it is able
                to do so in accordance with the Privacy Act.
              </p>
            </SubSection>

            <SubSection
              number="2.6"
              title="How to seek access to and correction of personal information"
            >
              <p>
                You have a right under the Privacy Act to access personal
                information held about you, and to request corrections to
                any personal information GRS holds about you if you think it
                is inaccurate, out-of-date, incomplete, irrelevant, or
                misleading. However, the Privacy Act sets out circumstances
                in which GRS may decline access to or correction of personal
                information (e.g. where access is unlawful under a secrecy
                provision in portfolio legislation, or where the information
                held is an opinion rather than an objective fact).
              </p>
              <p>
                To access or seek correction of personal information we hold
                about you, please contact us using the details set out in
                section 5.1 below. It is also possible to access and correct
                documents held by GRS under the Freedom of Information Act
                1982 (the FOI Act).
              </p>
            </SubSection>

            <SubSection
              number="2.7"
              title="Accidental or unauthorised disclosure of personal information"
            >
              <p>
                GRS will take seriously and deal promptly with any accidental
                or unauthorised disclosure of personal information. GRS
                follows the OAIC&apos;s Data Breach Notification guide when
                handling accidental or unauthorised disclosures of personal
                information. Legislative or administrative sanctions,
                including criminal sanctions, may apply to unauthorised
                disclosures of personal information.
              </p>
            </SubSection>

            <SubSection number="2.8" title="Data security">
              <p>
                Access to personal information held within GRS is restricted
                to authorised persons who are GRS staff or contractors.
                Electronic and paper records containing personal information
                are protected in accordance with suitable electronic medical
                record security policies. GRS regularly conducts audits to
                ensure we adhere to our protective and computer security
                policies.
              </p>
            </SubSection>

            <SubSection number="2.9" title="Our website">
              <p>
                This website is managed internally by GRS staff. Generally,
                GRS only collects personal information from its website
                where a person chooses to provide that information. If you
                visit our website to read or download information, GRS
                records a range of technical information that does not
                reveal your identity, including your IP or server address,
                your general locality, and the date and time of your visit.
                This information is used for statistical and development
                purposes. No attempt is made to identify you through your
                browsing other than in exceptional circumstances, such as an
                investigation into improper use of the website.
              </p>
              <p>
                Some functionality of the GRS website is not run by GRS, and
                third parties may capture and store your personal
                information outside Australia. These third parties include
                (but are not limited to) Facebook, Wix, Google, Dropbox, 123
                Forms, VINCI, and Powerdiary, and may not be subject to the
                Privacy Act. GRS is not responsible for the privacy practices
                of these third parties and encourages you to examine each
                website&apos;s privacy policy and make your own decisions
                regarding their reliability.
              </p>
              <p>
                The GRS website might contain links to other websites. GRS is
                not responsible for the content and privacy practices of
                other websites and encourages you to examine each
                website&apos;s privacy policy and make your own decisions
                regarding the reliability of material and information found.
              </p>
            </SubSection>

            <SubSection number="2.10" title="Cookies">
              <p>
                Cookies are used to maintain contact with a user through a
                website session. A cookie is a small file supplied by GRS
                and stored by your web browser software on your computer
                when you access the GRS website. Cookies allow GRS to
                recognise an individual web user as they browse the GRS
                website.
              </p>
            </SubSection>

            <SubSection number="2.11" title="Electronic communication">
              <p>
                There are inherent risks associated with the transmission of
                information over the internet, including via email. You
                should be aware of this when sending personal information to
                us by email or through the GRS website. If this concerns
                you, you may prefer to use other methods of communication
                with GRS, such as post, fax, or phone (although these methods
                have associated risks). GRS only records email addresses
                when a person sends a message. Any personal information
                provided, including email addresses, will only be used or
                disclosed for the purpose for which it was provided.
              </p>
            </SubSection>

            <SubSection
              number="2.12"
              title="Disclosure of personal information overseas"
            >
              <p>
                On occasions, GRS may disclose personal information to
                recipients who are overseas. Situations in which GRS may
                transfer personal information overseas include:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  the provision of personal information to overseas
                  researchers or consultants (where consent has been given or
                  GRS is otherwise legally able to provide this information);
                </li>
                <li>
                  the provision of personal information to recipients using a
                  web-based email account where data is stored on an overseas
                  server; and
                </li>
                <li>
                  the provision of personal information to foreign
                  governments and law enforcement agencies (in limited
                  circumstances and where authorised by law).
                </li>
              </ul>
              <p>
                It is not practicable to list every country to which GRS may
                provide personal information, as this will vary depending on
                the circumstances. However, you may contact GRS (using the
                details in section 5.1) to find out which countries, if any,
                your information has been given to.
              </p>
            </SubSection>
          </Section>

          <Section number="3" title="Complaints">
            <SubSection number="3.1" title="How to make a complaint">
              <p>
                If you think GRS may have breached your privacy rights, you
                may contact us using the details set out in section 5.2
                below.
              </p>
            </SubSection>

            <SubSection number="3.2" title="GRS's process for handling complaints">
              <p>
                The relevant GRS area service manager will respond to your
                complaint or request promptly if you provide your contact
                details. We are committed to the quick and fair resolution of
                any complaints and will ensure your complaint is taken
                seriously. You will not suffer negative treatment as a result
                of making a complaint. Details of our complaint policy are
                available in the GRS Compliments and Complaints Policy.
              </p>
            </SubSection>

            <SubSection
              number="3.3"
              title="How to complain to the Office of the Australian Information Commissioner (OAIC)"
            >
              <p>
                You also have the option of contacting the OAIC if you wish
                to make a privacy complaint against GRS, or if you are not
                satisfied with how we have handled a complaint made to us in
                the first instance. The OAIC website contains information on
                how to make a privacy complaint. If you make a complaint
                directly to the OAIC rather than to GRS, the OAIC may
                recommend you try to resolve the complaint directly with GRS
                first.
              </p>
            </SubSection>
          </Section>

          <Section number="4" title="Privacy policy updates">
            <p>We will review this Privacy Policy regularly and update it as required.</p>
          </Section>

          <Section number="5" title="How to contact us">
            <SubSection
              number="5.1"
              title="General enquiries and requests to access or correct personal information"
            >
              <p>If you wish to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  query how your personal information is collected, held,
                  used or disclosed
                </li>
                <li>ask questions about this Privacy Policy</li>
                <li>
                  obtain access to or seek correction of your personal
                  information
                </li>
              </ul>
              <p>
                please contact the GRS administrative team using the
                following details:
              </p>
              <ul className="space-y-1">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:admin@grs.health"
                    className="font-semibold text-orange-700 hover:text-orange-800"
                  >
                    admin@grs.health
                  </a>
                </li>
                <li>
                  Telephone:{" "}
                  <a
                    href="tel:1300066716"
                    className="font-semibold text-orange-700 hover:text-orange-800"
                  >
                    1300 066 716
                  </a>
                </li>
              </ul>
            </SubSection>

            <SubSection number="5.2" title="Contact details for privacy complaints">
              <p>
                If you wish to make a complaint about a breach of your
                privacy, please contact the GRS management team using the
                following details:
              </p>
              <ul className="space-y-1">
                <li>
                  Email (NSW):{" "}
                  <a
                    href="mailto:info.nsw@grs.health"
                    className="font-semibold text-orange-700 hover:text-orange-800"
                  >
                    info.nsw@grs.health
                  </a>
                </li>
                <li>
                  Email (QLD):{" "}
                  <a
                    href="mailto:info.qld@grs.health"
                    className="font-semibold text-orange-700 hover:text-orange-800"
                  >
                    info.qld@grs.health
                  </a>
                </li>
                <li>
                  Online feedback/complaint form:{" "}
                  <a
                    href="/feedback-and-complaint"
                    className="font-semibold text-orange-700 hover:text-orange-800"
                  >
                    grs.health/feedback-and-complaint
                  </a>
                </li>
              </ul>
            </SubSection>

            <SubSection number="5.3" title="Availability of this Policy">
              <p>
                If you wish to access this Policy in an alternative format
                (e.g. hard copy), please contact GRS using the details set
                out in section 5.1 above.
              </p>
            </SubSection>
          </Section>

          <div className="border-t border-slate-200 pt-6 text-xs text-slate-500">
            <p>Global Rehabilitation Service Pty. Ltd. · ABN 51626759019</p>
            <p className="mt-1">Approved by the Board on 01/07/2023 · Scheduled review 02/05/2025</p>
          </div>
        </div>
      </section>
    </>
  );
}
