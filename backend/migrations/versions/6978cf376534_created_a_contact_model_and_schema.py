"""Created a Contact model and schema

Revision ID: 6978cf376534
Revises: 0b4953859a30
Create Date: 2023-04-28 10:20:54.455012

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6978cf376534'
down_revision = '0b4953859a30'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('contact',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('message', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('contact')
    # ### end Alembic commands ###
