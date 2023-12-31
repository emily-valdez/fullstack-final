"""changed tiktok to website

Revision ID: fecb3c7e01ab
Revises: 3519da6d3506
Create Date: 2023-12-12 19:03:26.863759

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fecb3c7e01ab'
down_revision = '3519da6d3506'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('authors', schema=None) as batch_op:
        batch_op.add_column(sa.Column('website', sa.String(), nullable=True))
        batch_op.drop_column('tiktok')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('authors', schema=None) as batch_op:
        batch_op.add_column(sa.Column('tiktok', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('website')

    # ### end Alembic commands ###
