/**
 * Estructura real del CRM de S&G Immigration en GoHighLevel.
 * Consultada en modo lectura el 6 de octubre de 2026. Solo estructura:
 * no contiene ni muestra información de clientes.
 *
 * Los nombres están en inglés tal como existen en el CRM. La glosa en español
 * es una traducción literal del nombre, no una descripción de comportamiento.
 */

export const crmSnapshotDate = '6 de octubre de 2026';

export const pipeline = {
  name: 'Immigration Sales',
  stages: [
    { name: 'New Lead', gloss: 'Contacto nuevo' },
    { name: 'Initial Contact', gloss: 'Primer contacto' },
    { name: 'Consultation Scheduled', gloss: 'Consulta agendada' },
    { name: 'Consultation Done', gloss: 'Consulta realizada' },
    { name: 'Proposal Sent', gloss: 'Propuesta enviada' },
    { name: 'Contract Signed', gloss: 'Contrato firmado' },
  ],
  outcomes: [
    { name: 'Won', gloss: 'Cliente', kind: 'won' as const },
    { name: 'Lost', gloss: 'Perdido', kind: 'lost' as const },
  ],
};

export const forms = [
  { name: 'New Client Intake Form', gloss: 'Ingreso de cliente nuevo' },
  { name: 'Marketing Form - Claim Offer', gloss: 'Formulario de campaña' },
];

/** Solo workflows publicados. Los borradores de plantilla no se muestran. */
export const workflowGroups = [
  {
    name: 'Contactos',
    workflows: [
      { name: 'Contact Created', gloss: 'Contacto creado' },
      { name: 'Lead Follow Up - No Response', gloss: 'Seguimiento sin respuesta' },
    ],
  },
  {
    name: 'Citas',
    workflows: [
      { name: 'Appointment Booked - Confirmation', gloss: 'Confirmación de cita' },
      { name: 'Appointment Cancelled - Follow Up', gloss: 'Seguimiento de cita cancelada' },
      { name: 'No Show Follow Up', gloss: 'Seguimiento por inasistencia' },
    ],
  },
  {
    name: 'Llamadas',
    workflows: [
      { name: 'Missed Call - Follow Up', gloss: 'Seguimiento de llamada perdida' },
      { name: 'Inbound Call - Answered', gloss: 'Llamada entrante atendida' },
      { name: 'Callback Done', gloss: 'Devolución de llamada hecha' },
    ],
  },
];

export type FieldType = 'options' | 'text' | 'longtext' | 'date' | 'number';

export const fieldTypeLabel: Record<FieldType, string> = {
  options: 'Opciones',
  text: 'Texto',
  longtext: 'Texto largo',
  date: 'Fecha',
  number: 'Número',
};

export interface Field {
  name: string;
  key: string;
  type: FieldType;
  options?: string[];
}

export interface FieldGroup {
  id: string;
  name: string;
  fields: Field[];
}

export const fieldGroups: FieldGroup[] = [
  {
    id: 'expediente',
    name: 'Expediente',
    fields: [
      { name: 'Case Number', key: 'contact.case_number', type: 'text' },
      {
        name: 'Case Status',
        key: 'contact.case_status',
        type: 'options',
        options: ['Active', 'Pending Documents', 'Submitted', 'Approved', 'Denied', 'On Hold', 'Closed'],
      },
      {
        name: 'Immigration Case Type',
        key: 'contact.immigration_case_type',
        type: 'options',
        options: [
          'Family-Based Immigration',
          'Employment-Based Immigration',
          'Asylum',
          'Adjustment of Status',
          'Naturalization / Citizenship',
          'Removal Defense',
          'Consular Processing',
          'Visa',
          'DACA',
          'Other',
        ],
      },
      { name: 'Immigration Goal', key: 'contact.immigration_goal', type: 'text' },
      { name: 'USCIS Number', key: 'contact.uscis_number', type: 'text' },
      { name: 'A-Number', key: 'contact.anumber', type: 'text' },
      { name: 'Case Open Date', key: 'contact.case_open_date', type: 'date' },
      { name: 'Priority Date', key: 'contact.priority_date', type: 'date' },
      { name: 'Important Dates', key: 'contact.important_dates', type: 'text' },
    ],
  },
  {
    id: 'perfil',
    name: 'Perfil migratorio',
    fields: [
      {
        name: 'Current Immigration Status',
        key: 'contact.current_immigration_status',
        type: 'options',
        options: ['U.S. Citizen', 'Permanent Resident', 'Visa Holder', 'Undocumented', 'Asylum Applicant', 'TPS', 'DACA', 'Other'],
      },
      {
        name: 'Entry Method',
        key: 'contact.entry_method',
        type: 'options',
        options: ['Legal Port of Entry', 'Visa Waiver', 'Tourist Visa', 'Student Visa', 'Work Visa', 'Without Inspection', 'Parole', 'Other'],
      },
      { name: 'Date of Entry', key: 'contact.date_of_entry', type: 'date' },
      { name: 'Status Expiration Date', key: 'contact.status_expiration_date', type: 'date' },
      { name: 'Nationality', key: 'contact.nationality', type: 'text' },
      { name: 'Country of Birth', key: 'contact.country_of_birth', type: 'text' },
      { name: 'Country of Citizenship', key: 'contact.country_of_citizenship', type: 'text' },
      { name: 'Country of Origin', key: 'contact.country_of_origin', type: 'text' },
    ],
  },
  {
    id: 'documentos',
    name: 'Documentos',
    fields: [
      { name: 'Document Requested', key: 'contact.document_requested', type: 'longtext' },
      { name: 'Document Received', key: 'contact.document_received', type: 'longtext' },
      { name: 'Document Pending', key: 'contact.document_pending', type: 'longtext' },
      { name: 'Document Received Date', key: 'contact.document_received_date', type: 'date' },
      { name: 'Document Expiration Date', key: 'contact.document_expiration_date', type: 'date' },
      { name: 'Document Notes', key: 'contact.document_notes', type: 'longtext' },
    ],
  },
  {
    id: 'servicio',
    name: 'Servicio y pagos',
    fields: [
      {
        name: 'Service Type',
        key: 'contact.service_type',
        type: 'options',
        options: ['Full Representation', 'Consultation Only', 'Document Preparation', 'Appeal', 'Other'],
      },
      {
        name: 'Service Status',
        key: 'contact.service_status',
        type: 'options',
        options: ['Active', 'On Hold', 'Completed', 'Cancelled'],
      },
      { name: 'Service Start Date', key: 'contact.service_start_date', type: 'date' },
      {
        name: 'Payment Status',
        key: 'contact.payment_status',
        type: 'options',
        options: ['Paid in Full', 'Payment Plan Active', 'Overdue', 'Pending', 'Refunded'],
      },
      {
        name: 'Payment Method',
        key: 'contact.payment_method',
        type: 'options',
        options: ['Cash', 'Check', 'Credit Card', 'Bank Transfer', 'Payment Plan', 'Other'],
      },
      { name: 'Contract Value', key: 'contact.contract_value', type: 'number' },
    ],
  },
  {
    id: 'seguimiento',
    name: 'Seguimiento',
    fields: [
      { name: 'Priority Level', key: 'contact.priority_level', type: 'options', options: ['High', 'Medium', 'Low'] },
      { name: 'Assigned Attorney', key: 'contact.assigned_attorney', type: 'text' },
      { name: 'Paralegal Assigned', key: 'contact.paralegal_assigned', type: 'text' },
      { name: 'Next Action', key: 'contact.next_action', type: 'text' },
      { name: 'Next Action Date', key: 'contact.next_action_date', type: 'date' },
      { name: 'Last Call Date', key: 'contact.last_call_date', type: 'date' },
      {
        name: 'Call Outcome',
        key: 'contact.call_outcome',
        type: 'options',
        options: ['Answered', 'Missed', 'Voicemail', 'Wrong Number'],
      },
      { name: 'Call Notes', key: 'contact.call_notes', type: 'longtext' },
      {
        name: 'How did you hear about us?',
        key: 'contact.how_did_you_hear_about_us',
        type: 'options',
        options: ['Website', 'Referral', 'Social Media', 'Phone Call', 'Other'],
      },
      { name: 'Additional Information', key: 'contact.additional_information', type: 'longtext' },
    ],
  },
];

export const crmCounts = {
  stages: pipeline.stages.length + pipeline.outcomes.length,
  workflows: workflowGroups.reduce((n, g) => n + g.workflows.length, 0),
  forms: forms.length,
  fields: fieldGroups.reduce((n, g) => n + g.fields.length, 0),
};
