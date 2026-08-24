// Embeds a 123FormBuilder form directly (the same service GRS's forms already
// run on via the Wix "123 Form Builder & Payments" app on the live site).
// Uses the public form.123formbuilder.com host, which serves the form
// standalone (frame-ancestors: * — embeddable anywhere, no Wix dependency).
export default function FormBuilderEmbed({
  formId,
  title,
  height = 1400,
}: {
  formId: string;
  title: string;
  height?: number;
}) {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-sm">
      <iframe
        src={`https://form.123formbuilder.com/${formId}`}
        title={title}
        style={{ height }}
        className="w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
