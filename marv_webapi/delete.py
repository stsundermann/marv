# -*- coding: utf-8 -*-
#
# MARV
# Copyright (C) 2016-2017  Ternaris, Munich, Germany
#
# This file is part of MARV
#
# MARV is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# MARV is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with MARV.  If not, see <http://www.gnu.org/licenses/>.

from __future__ import absolute_import, division, print_function

import flask

from marv.model import Dataset, db
from .tooling import api_endpoint as marv_api_endpoint


@marv_api_endpoint('/dataset', methods=['DELETE'], acl=['__authenticated__'])
def delete():
    datasets = Dataset.__table__
    ids = flask.request.get_json()
    if not ids:
        flask.abort(400)
    stmt = datasets.update()\
                   .where(datasets.c.id.in_(ids))\
                   .values(discarded=True)
    db.session.execute(stmt)
    db.session.commit()
    return flask.jsonify({})
