import AppForm, { FieldTypes } from "../../components/app-form"
export default function CreateCustomer(){

    const formSections = [
    {
      fields: [
        {
          name: "id",
          label: "Booking ID",
          type: FieldTypes.text,
          hidden: true,
        },
        {
          name: "title",
          label: "Title of the Meeting",
          placeholder: "Enter text",
          type: FieldTypes.text,
          rules: [{ required: true, message: "Please enter the title of the meeting" }],
        },
        {
          name: "startTime",
          label: "Starting Date & Time",
          placeholder: "Select Date & Time",
          type: FieldTypes.datetimelocal,
          rules: [{ required: true, message: "Please select date and time" }],
        },
        {
          name: "endTime",
          label: "Ending Date & Time",
          placeholder: "Select Date & Time",
          type: FieldTypes.datetimelocal,
          rules: [{ required: true, message: "Please select date and time" }],
        },
        {
          name: "meetingRoomId",
          label: "Meeting Room",
          type: FieldTypes.select,
          options: null,
          rules: [{ required: true, message: "Please select meeting room" }],
        },
        {
          name: "organizationId",
          label: "Organization",
          type: FieldTypes.select,
          options: null,
          rules: [{ required: true, message: "Please select organization" }],
        },
      ],
    },
  ];

return <>
<h3>Create Customer</h3>
<AppForm sections={formSections}></AppForm>
</>
}