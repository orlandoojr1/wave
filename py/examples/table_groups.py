# Table / Groups
# Manage data in custom groups
# #table
# ---
import random

from faker import Faker

from h2o_wave import main, app, Q, ui

fake = Faker()

_id = 0


class Issue:
    def __init__(self, text: str, status: str, created: str):
        global _id
        _id += 1
        self.id = f'I{_id}'
        self.text = text
        self.status = status
        self.created = created


# Create some issues
issues_foo = [
    Issue(
        text=fake.sentence(),
        status=('Closed' if i % 2 == 0 else 'Open'),
        created=fake.iso8601()) for i in range(40)
]

issues_bar = [
    Issue(
        text=fake.sentence(),
        status=('Closed' if i % 2 == 0 else 'Open'),
        created=fake.iso8601()) for i in range(30)
]

# Create columns for our issue table.
columns = [
    ui.table_column(name='text', label='Issues reported by', sortable=True, searchable=True, max_width='300'),
    ui.table_column(name='status', label='Status', filterable=True),
    ui.table_column(name='created', label='Created', sortable=True, data_type='time'),
]


@app('/demo')
async def serve(q: Q):
    q.page['form'] = ui.form_card(box='1 1 -1 10', items=[
        ui.table(
            name='issues',
            columns=columns,
            groups=[
                ui.table_group("Foo company", [ui.table_row(name=issue.id, cells=[issue.text, issue.status, issue.created]) for issue in issues_foo]),
                ui.table_group("Bar company", [ui.table_row(name=issue.id, cells=[issue.text, issue.status, issue.created]) for issue in issues_bar], collapsed=False)],
            downloadable=True,
            resettable=True,
            height='800px'
        )
    ])
    await q.page.save()
