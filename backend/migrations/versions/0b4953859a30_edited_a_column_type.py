"""Edited a column type

Revision ID: 0b4953859a30
Revises: 076b02e40e5d
Create Date: 2023-04-26 12:00:02.638917

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '0b4953859a30'
down_revision = '076b02e40e5d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('track', schema=None) as batch_op:
        batch_op.alter_column('time',
               existing_type=mysql.FLOAT(),
               type_=sa.Numeric(precision=4, scale=2),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('track', schema=None) as batch_op:
        batch_op.alter_column('time',
               existing_type=sa.Numeric(precision=4, scale=2),
               type_=mysql.FLOAT(),
               nullable=True)

    # ### end Alembic commands ###
