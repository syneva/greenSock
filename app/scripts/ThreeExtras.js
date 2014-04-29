// ThreeExtras.js r32 - http://github.com/mrdoob/three.js
var THREE = THREE || {};
THREE.Color = function(a) {
	this.setHex(a)
};
THREE.Color.prototype = {
	autoUpdate: !0,
	setRGB: function(a, b, c) {
		this.r = a;
		this.g = b;
		this.b = c;
		if (this.autoUpdate) {
			this.updateHex();
			this.updateStyleString()
		}
	},
	setHSV: function(a, b, c) {
		var d, f, g, h, k, j;
		if (c == 0) d = f = g = 0;
		else {
			h = Math.floor(a * 6);
			k = a * 6 - h;
			a = c * (1 - b);
			j = c * (1 - b * k);
			b = c * (1 - b * (1 - k));
			switch (h) {
				case 1:
					d = j;
					f = c;
					g = a;
					break;
				case 2:
					d = a;
					f = c;
					g = b;
					break;
				case 3:
					d = a;
					f = j;
					g = c;
					break;
				case 4:
					d = b;
					f = a;
					g = c;
					break;
				case 5:
					d = c;
					f = a;
					g = j;
					break;
				case 6:
				case 0:
					d = c;
					f = b;
					g = a
			}
		}
		this.r = d;
		this.g = f;
		this.b = g;
		if (this.autoUpdate) {
			this.updateHex();
			this.updateStyleString()
		}
	},
	setHex: function(a) {
		this.hex = ~~a & 16777215;
		if (this.autoUpdate) {
			this.updateRGBA();
			this.updateStyleString()
		}
	},
	updateHex: function() {
		this.hex = ~~ (this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
	},
	updateRGBA: function() {
		this.r = (this.hex >> 16 & 255) / 255;
		this.g = (this.hex >> 8 & 255) / 255;
		this.b = (this.hex & 255) / 255
	},
	updateStyleString: function() {
		this.__styleString = "rgb(" + ~~(this.r * 255) + "," + ~~(this.g * 255) + "," + ~~(this.b * 255) + ")"
	},
	clone: function() {
		return new THREE.Color(this.hex)
	},
	toString: function() {
		return "THREE.Color ( r: " +
			this.r + ", g: " + this.g + ", b: " + this.b + ", hex: " + this.hex + " )"
	}
};
THREE.Vector2 = function(a, b) {
	this.x = a || 0;
	this.y = b || 0
};
THREE.Vector2.prototype = {
	set: function(a, b) {
		this.x = a;
		this.y = b;
		return this
	},
	copy: function(a) {
		this.x = a.x;
		this.y = a.y;
		return this
	},
	addSelf: function(a) {
		this.x += a.x;
		this.y += a.y;
		return this
	},
	add: function(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		return this
	},
	subSelf: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		return this
	},
	sub: function(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		return this
	},
	multiplyScalar: function(a) {
		this.x *= a;
		this.y *= a;
		return this
	},
	unit: function() {
		this.multiplyScalar(1 / this.length());
		return this
	},
	length: function() {
		return Math.sqrt(this.x *
			this.x + this.y * this.y)
	},
	lengthSq: function() {
		return this.x * this.x + this.y * this.y
	},
	negate: function() {
		this.x = -this.x;
		this.y = -this.y;
		return this
	},
	clone: function() {
		return new THREE.Vector2(this.x, this.y)
	},
	toString: function() {
		return "THREE.Vector2 (" + this.x + ", " + this.y + ")"
	}
};
THREE.Vector3 = function(a, b, c) {
	this.x = a || 0;
	this.y = b || 0;
	this.z = c || 0
};
THREE.Vector3.prototype = {
	set: function(a, b, c) {
		this.x = a;
		this.y = b;
		this.z = c;
		return this
	},
	copy: function(a) {
		this.x = a.x;
		this.y = a.y;
		this.z = a.z;
		return this
	},
	add: function(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		return this
	},
	addSelf: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
		return this
	},
	addScalar: function(a) {
		this.x += a;
		this.y += a;
		this.z += a;
		return this
	},
	sub: function(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		return this
	},
	subSelf: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
		return this
	},
	cross: function(a, b) {
		this.x = a.y * b.z - a.z * b.y;
		this.y = a.z * b.x - a.x * b.z;
		this.z = a.x * b.y - a.y * b.x;
		return this
	},
	crossSelf: function(a) {
		var b = this.x,
			c = this.y,
			d = this.z;
		this.x = c * a.z - d * a.y;
		this.y = d * a.x - b * a.z;
		this.z = b * a.y - c * a.x;
		return this
	},
	multiply: function(a, b) {
		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;
		return this
	},
	multiplySelf: function(a) {
		this.x *= a.x;
		this.y *= a.y;
		this.z *= a.z;
		return this
	},
	multiplyScalar: function(a) {
		this.x *= a;
		this.y *= a;
		this.z *= a;
		return this
	},
	divideSelf: function(a) {
		this.x /= a.x;
		this.y /= a.y;
		this.z /=
			a.z;
		return this
	},
	divideScalar: function(a) {
		this.x /= a;
		this.y /= a;
		this.z /= a;
		return this
	},
	dot: function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z
	},
	distanceTo: function(a) {
		var b = this.x - a.x,
			c = this.y - a.y;
		a = this.z - a.z;
		return Math.sqrt(b * b + c * c + a * a)
	},
	distanceToSquared: function(a) {
		var b = this.x - a.x,
			c = this.y - a.y;
		a = this.z - a.z;
		return b * b + c * c + a * a
	},
	length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
	},
	lengthSq: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z
	},
	lengthManhattan: function() {
		return this.x +
			this.y + this.z
	},
	negate: function() {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		return this
	},
	normalize: function() {
		var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		a > 0 ? this.multiplyScalar(1 / a) : this.set(0, 0, 0);
		return this
	},
	setLength: function(a) {
		return this.normalize().multiplyScalar(a)
	},
	isZero: function() {
		return Math.abs(this.x) < 1.0E-4 && Math.abs(this.y) < 1.0E-4 && Math.abs(this.z) < 1.0E-4
	},
	clone: function() {
		return new THREE.Vector3(this.x, this.y, this.z)
	},
	toString: function() {
		return "THREE.Vector3 ( " +
			this.x + ", " + this.y + ", " + this.z + " )"
	}
};
THREE.Vector4 = function(a, b, c, d) {
	this.x = a || 0;
	this.y = b || 0;
	this.z = c || 0;
	this.w = d || 1
};
THREE.Vector4.prototype = {
	set: function(a, b, c, d) {
		this.x = a;
		this.y = b;
		this.z = c;
		this.w = d;
		return this
	},
	copy: function(a) {
		this.x = a.x;
		this.y = a.y;
		this.z = a.z;
		this.w = a.w || 1;
		return this
	},
	add: function(a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;
		return this
	},
	addSelf: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
		this.w += a.w;
		return this
	},
	sub: function(a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;
		return this
	},
	subSelf: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
		this.w -= a.w;
		return this
	},
	multiplyScalar: function(a) {
		this.x *= a;
		this.y *= a;
		this.z *= a;
		this.w *= a;
		return this
	},
	divideScalar: function(a) {
		this.x /= a;
		this.y /= a;
		this.z /= a;
		this.w /= a;
		return this
	},
	lerpSelf: function(a, b) {
		this.x += (a.x - this.x) * b;
		this.y += (a.y - this.y) * b;
		this.z += (a.z - this.z) * b;
		this.w += (a.w - this.w) * b
	},
	clone: function() {
		return new THREE.Vector4(this.x, this.y, this.z, this.w)
	},
	toString: function() {
		return "THREE.Vector4 (" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
	}
};
THREE.Ray = function(a, b) {
	this.origin = a || new THREE.Vector3;
	this.direction = b || new THREE.Vector3
};
THREE.Ray.prototype = {
	intersectScene: function(a) {
		var b, c, d = a.objects,
			f = [];
		a = 0;
		for (b = d.length; a < b; a++) {
			c = d[a];
			c instanceof THREE.Mesh && (f = f.concat(this.intersectObject(c)))
		}
		f.sort(function(g, h) {
			return g.distance - h.distance
		});
		return f
	},
	intersectObject: function(a) {
		function b(F, v, I, q) {
			q = q.clone().subSelf(v);
			I = I.clone().subSelf(v);
			var J = F.clone().subSelf(v);
			F = q.dot(q);
			v = q.dot(I);
			q = q.dot(J);
			var e = I.dot(I);
			I = I.dot(J);
			J = 1 / (F * e - v * v);
			e = (e * q - v * I) * J;
			F = (F * I - v * q) * J;
			return e > 0 && F > 0 && e + F < 1
		}
		var c, d, f, g, h, k, j, m, o, w,
			u, t = a.geometry,
			x = t.vertices,
			A = [];
		c = 0;
		for (d = t.faces.length; c < d; c++) {
			f = t.faces[c];
			w = this.origin.clone();
			u = this.direction.clone();
			j = a.globalMatrix;
			j.extractRotationMatrix(a.matrixRotation);
			g = j.multiplyVector3(x[f.a].position.clone());
			h = j.multiplyVector3(x[f.b].position.clone());
			k = j.multiplyVector3(x[f.c].position.clone());
			j = f instanceof THREE.Face4 ? j.multiplyVector3(x[f.d].position.clone()) : null;
			m = a.matrixRotation.multiplyVector3(f.normal.clone());
			o = u.dot(m);
			if (o < 0) {
				m = m.dot((new THREE.Vector3).sub(g,
					w)) / o;
				w = w.addSelf(u.multiplyScalar(m));
				if (f instanceof THREE.Face3) {
					if (b(w, g, h, k)) {
						f = {
							distance: this.origin.distanceTo(w),
							point: w,
							face: f,
							object: a
						};
						A.push(f)
					}
				} else if (f instanceof THREE.Face4 && (b(w, g, h, j) || b(w, h, k, j))) {
					f = {
						distance: this.origin.distanceTo(w),
						point: w,
						face: f,
						object: a
					};
					A.push(f)
				}
			}
		}
		return A
	}
};
THREE.Rectangle = function() {
	function a() {
		g = d - b;
		h = f - c
	}
	var b, c, d, f, g, h, k = !0;
	this.getX = function() {
		return b
	};
	this.getY = function() {
		return c
	};
	this.getWidth = function() {
		return g
	};
	this.getHeight = function() {
		return h
	};
	this.getLeft = function() {
		return b
	};
	this.getTop = function() {
		return c
	};
	this.getRight = function() {
		return d
	};
	this.getBottom = function() {
		return f
	};
	this.set = function(j, m, o, w) {
		k = !1;
		b = j;
		c = m;
		d = o;
		f = w;
		a()
	};
	this.addPoint = function(j, m) {
		if (k) {
			k = !1;
			b = j;
			c = m;
			d = j;
			f = m
		} else {
			b = b < j ? b : j;
			c = c < m ? c : m;
			d = d > j ? d : j;
			f = f > m ? f : m
		}
		a()
	};
	this.add3Points = function(j, m, o, w, u, t) {
		if (k) {
			k = !1;
			b = j < o ? j < u ? j : u : o < u ? o : u;
			c = m < w ? m < t ? m : t : w < t ? w : t;
			d = j > o ? j > u ? j : u : o > u ? o : u;
			f = m > w ? m > t ? m : t : w > t ? w : t
		} else {
			b = j < o ? j < u ? j < b ? j : b : u < b ? u : b : o < u ? o < b ? o : b : u < b ? u : b;
			c = m < w ? m < t ? m < c ? m : c : t < c ? t : c : w < t ? w < c ? w : c : t < c ? t : c;
			d = j > o ? j > u ? j > d ? j : d : u > d ? u : d : o > u ? o > d ? o : d : u > d ? u : d;
			f = m > w ? m > t ? m > f ? m : f : t > f ? t : f : w > t ? w > f ? w : f : t > f ? t : f
		}
		a()
	};
	this.addRectangle = function(j) {
		if (k) {
			k = !1;
			b = j.getLeft();
			c = j.getTop();
			d = j.getRight();
			f = j.getBottom()
		} else {
			b = b < j.getLeft() ? b : j.getLeft();
			c = c < j.getTop() ? c : j.getTop();
			d = d > j.getRight() ?
				d : j.getRight();
			f = f > j.getBottom() ? f : j.getBottom()
		}
		a()
	};
	this.inflate = function(j) {
		b -= j;
		c -= j;
		d += j;
		f += j;
		a()
	};
	this.minSelf = function(j) {
		b = b > j.getLeft() ? b : j.getLeft();
		c = c > j.getTop() ? c : j.getTop();
		d = d < j.getRight() ? d : j.getRight();
		f = f < j.getBottom() ? f : j.getBottom();
		a()
	};
	this.instersects = function(j) {
		return Math.min(d, j.getRight()) - Math.max(b, j.getLeft()) >= 0 && Math.min(f, j.getBottom()) - Math.max(c, j.getTop()) >= 0
	};
	this.empty = function() {
		k = !0;
		f = d = c = b = 0;
		a()
	};
	this.isEmpty = function() {
		return k
	};
	this.toString = function() {
		return "THREE.Rectangle ( left: " +
			b + ", right: " + d + ", top: " + c + ", bottom: " + f + ", width: " + g + ", height: " + h + " )"
	}
};
THREE.Matrix3 = function() {
	this.m = []
};
THREE.Matrix3.prototype = {
	transpose: function() {
		var a, b = this.m;
		a = b[1];
		b[1] = b[3];
		b[3] = a;
		a = b[2];
		b[2] = b[6];
		b[6] = a;
		a = b[5];
		b[5] = b[7];
		b[7] = a;
		return this
	},
	transposeIntoArray: function(a) {
		var b = this.m;
		a[0] = b[0];
		a[1] = b[3];
		a[2] = b[6];
		a[3] = b[1];
		a[4] = b[4];
		a[5] = b[7];
		a[6] = b[2];
		a[7] = b[5];
		a[8] = b[8];
		return this
	}
};
THREE.Matrix4 = function(a, b, c, d, f, g, h, k, j, m, o, w, u, t, x, A) {
	this.n11 = a || 1;
	this.n12 = b || 0;
	this.n13 = c || 0;
	this.n14 = d || 0;
	this.n21 = f || 0;
	this.n22 = g || 1;
	this.n23 = h || 0;
	this.n24 = k || 0;
	this.n31 = j || 0;
	this.n32 = m || 0;
	this.n33 = o || 1;
	this.n34 = w || 0;
	this.n41 = u || 0;
	this.n42 = t || 0;
	this.n43 = x || 0;
	this.n44 = A || 1;
	this.flat = Array(16);
	this.m33 = new THREE.Matrix3
};
THREE.Matrix4.prototype = {
	identity: function() {
		this.n11 = 1;
		this.n21 = this.n14 = this.n13 = this.n12 = 0;
		this.n22 = 1;
		this.n32 = this.n31 = this.n24 = this.n23 = 0;
		this.n33 = 1;
		this.n43 = this.n42 = this.n41 = this.n34 = 0;
		this.n44 = 1;
		return this
	},
	set: function(a, b, c, d, f, g, h, k, j, m, o, w, u, t, x, A) {
		this.n11 = a;
		this.n12 = b;
		this.n13 = c;
		this.n14 = d;
		this.n21 = f;
		this.n22 = g;
		this.n23 = h;
		this.n24 = k;
		this.n31 = j;
		this.n32 = m;
		this.n33 = o;
		this.n34 = w;
		this.n41 = u;
		this.n42 = t;
		this.n43 = x;
		this.n44 = A;
		return this
	},
	copy: function(a) {
		this.n11 = a.n11;
		this.n12 = a.n12;
		this.n13 =
			a.n13;
		this.n14 = a.n14;
		this.n21 = a.n21;
		this.n22 = a.n22;
		this.n23 = a.n23;
		this.n24 = a.n24;
		this.n31 = a.n31;
		this.n32 = a.n32;
		this.n33 = a.n33;
		this.n34 = a.n34;
		this.n41 = a.n41;
		this.n42 = a.n42;
		this.n43 = a.n43;
		this.n44 = a.n44;
		return this
	},
	lookAt: function(a, b, c) {
		var d = THREE.Matrix4.__tmpVec1,
			f = THREE.Matrix4.__tmpVec2,
			g = THREE.Matrix4.__tmpVec3;
		g.sub(a, b).normalize();
		d.cross(c, g).normalize();
		f.cross(g, d).normalize();
		this.n11 = d.x;
		this.n12 = d.y;
		this.n13 = d.z;
		this.n14 = -d.dot(a);
		this.n21 = f.x;
		this.n22 = f.y;
		this.n23 = f.z;
		this.n24 = -f.dot(a);
		this.n31 = g.x;
		this.n32 = g.y;
		this.n33 = g.z;
		this.n34 = -g.dot(a);
		this.n43 = this.n42 = this.n41 = 0;
		this.n44 = 1;
		return this
	},
	multiplyVector3: function(a) {
		var b = a.x,
			c = a.y,
			d = a.z,
			f = 1 / (this.n41 * b + this.n42 * c + this.n43 * d + this.n44);
		a.x = (this.n11 * b + this.n12 * c + this.n13 * d + this.n14) * f;
		a.y = (this.n21 * b + this.n22 * c + this.n23 * d + this.n24) * f;
		a.z = (this.n31 * b + this.n32 * c + this.n33 * d + this.n34) * f;
		return a
	},
	multiplyVector3OnlyZ: function(a) {
		var b = a.x,
			c = a.y;
		a = a.z;
		return (this.n31 * b + this.n32 * c + this.n33 * a + this.n34) * (1 / (this.n41 * b + this.n42 * c + this.n43 *
			a + this.n44))
	},
	multiplyVector4: function(a) {
		var b = a.x,
			c = a.y,
			d = a.z,
			f = a.w;
		a.x = this.n11 * b + this.n12 * c + this.n13 * d + this.n14 * f;
		a.y = this.n21 * b + this.n22 * c + this.n23 * d + this.n24 * f;
		a.z = this.n31 * b + this.n32 * c + this.n33 * d + this.n34 * f;
		a.w = this.n41 * b + this.n42 * c + this.n43 * d + this.n44 * f;
		return a
	},
	crossVector: function(a) {
		var b = new THREE.Vector4;
		b.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
		b.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
		b.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;
		b.w = a.w ? this.n41 *
			a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1;
		return b
	},
	multiply: function(a, b) {
		var c = a.n11,
			d = a.n12,
			f = a.n13,
			g = a.n14,
			h = a.n21,
			k = a.n22,
			j = a.n23,
			m = a.n24,
			o = a.n31,
			w = a.n32,
			u = a.n33,
			t = a.n34,
			x = a.n41,
			A = a.n42,
			F = a.n43,
			v = a.n44,
			I = b.n11,
			q = b.n12,
			J = b.n13,
			e = b.n14,
			aa = b.n21,
			L = b.n22,
			M = b.n23,
			V = b.n24,
			S = b.n31,
			Y = b.n32,
			Z = b.n33,
			G = b.n34,
			U = b.n41,
			na = b.n42,
			W = b.n43,
			ka = b.n44;
		this.n11 = c * I + d * aa + f * S + g * U;
		this.n12 = c * q + d * L + f * Y + g * na;
		this.n13 = c * J + d * M + f * Z + g * W;
		this.n14 = c * e + d * V + f * G + g * ka;
		this.n21 = h * I + k * aa + j * S + m * U;
		this.n22 = h * q + k * L + j * Y + m * na;
		this.n23 =
			h * J + k * M + j * Z + m * W;
		this.n24 = h * e + k * V + j * G + m * ka;
		this.n31 = o * I + w * aa + u * S + t * U;
		this.n32 = o * q + w * L + u * Y + t * na;
		this.n33 = o * J + w * M + u * Z + t * W;
		this.n34 = o * e + w * V + u * G + t * ka;
		this.n41 = x * I + A * aa + F * S + v * U;
		this.n42 = x * q + A * L + F * Y + v * na;
		this.n43 = x * J + A * M + F * Z + v * W;
		this.n44 = x * e + A * V + F * G + v * ka;
		return this
	},
	multiplyToArray: function(a, b, c) {
		var d = a.n11,
			f = a.n12,
			g = a.n13,
			h = a.n14,
			k = a.n21,
			j = a.n22,
			m = a.n23,
			o = a.n24,
			w = a.n31,
			u = a.n32,
			t = a.n33,
			x = a.n34,
			A = a.n41,
			F = a.n42,
			v = a.n43;
		a = a.n44;
		var I = b.n11,
			q = b.n12,
			J = b.n13,
			e = b.n14,
			aa = b.n21,
			L = b.n22,
			M = b.n23,
			V = b.n24,
			S = b.n31,
			Y = b.n32,
			Z = b.n33,
			G = b.n34,
			U = b.n41,
			na = b.n42,
			W = b.n43;
		b = b.n44;
		this.n11 = d * I + f * aa + g * S + h * U;
		this.n12 = d * q + f * L + g * Y + h * na;
		this.n13 = d * J + f * M + g * Z + h * W;
		this.n14 = d * e + f * V + g * G + h * b;
		this.n21 = k * I + j * aa + m * S + o * U;
		this.n22 = k * q + j * L + m * Y + o * na;
		this.n23 = k * J + j * M + m * Z + o * W;
		this.n24 = k * e + j * V + m * G + o * b;
		this.n31 = w * I + u * aa + t * S + x * U;
		this.n32 = w * q + u * L + t * Y + x * na;
		this.n33 = w * J + u * M + t * Z + x * W;
		this.n34 = w * e + u * V + t * G + x * b;
		this.n41 = A * I + F * aa + v * S + a * U;
		this.n42 = A * q + F * L + v * Y + a * na;
		this.n43 = A * J + F * M + v * Z + a * W;
		this.n44 = A * e + F * V + v * G + a * b;
		c[0] = this.n11;
		c[1] = this.n21;
		c[2] = this.n31;
		c[3] = this.n41;
		c[4] = this.n12;
		c[5] = this.n22;
		c[6] = this.n32;
		c[7] = this.n42;
		c[8] = this.n13;
		c[9] = this.n23;
		c[10] = this.n33;
		c[11] = this.n43;
		c[12] = this.n14;
		c[13] = this.n24;
		c[14] = this.n34;
		c[15] = this.n44;
		return this
	},
	multiplySelf: function(a) {
		var b = this.n11,
			c = this.n12,
			d = this.n13,
			f = this.n14,
			g = this.n21,
			h = this.n22,
			k = this.n23,
			j = this.n24,
			m = this.n31,
			o = this.n32,
			w = this.n33,
			u = this.n34,
			t = this.n41,
			x = this.n42,
			A = this.n43,
			F = this.n44,
			v = a.n11,
			I = a.n21,
			q = a.n31,
			J = a.n41,
			e = a.n12,
			aa = a.n22,
			L = a.n32,
			M = a.n42,
			V = a.n13,
			S = a.n23,
			Y = a.n33,
			Z = a.n43,
			G = a.n14,
			U = a.n24,
			na = a.n34;
		a = a.n44;
		this.n11 = b * v + c * I + d * q + f * J;
		this.n12 = b * e + c * aa + d * L + f * M;
		this.n13 = b * V + c * S + d * Y + f * Z;
		this.n14 = b * G + c * U + d * na + f * a;
		this.n21 = g * v + h * I + k * q + j * J;
		this.n22 = g * e + h * aa + k * L + j * M;
		this.n23 = g * V + h * S + k * Y + j * Z;
		this.n24 = g * G + h * U + k * na + j * a;
		this.n31 = m * v + o * I + w * q + u * J;
		this.n32 = m * e + o * aa + w * L + u * M;
		this.n33 = m * V + o * S + w * Y + u * Z;
		this.n34 = m * G + o * U + w * na + u * a;
		this.n41 = t * v + x * I + A * q + F * J;
		this.n42 = t * e + x * aa + A * L + F * M;
		this.n43 = t * V + x * S + A * Y + F * Z;
		this.n44 = t * G + x * U + A * na + F * a;
		return this
	},
	multiplyScalar: function(a) {
		this.n11 *= a;
		this.n12 *=
			a;
		this.n13 *= a;
		this.n14 *= a;
		this.n21 *= a;
		this.n22 *= a;
		this.n23 *= a;
		this.n24 *= a;
		this.n31 *= a;
		this.n32 *= a;
		this.n33 *= a;
		this.n34 *= a;
		this.n41 *= a;
		this.n42 *= a;
		this.n43 *= a;
		this.n44 *= a;
		return this
	},
	determinant: function() {
		var a = this.n11,
			b = this.n12,
			c = this.n13,
			d = this.n14,
			f = this.n21,
			g = this.n22,
			h = this.n23,
			k = this.n24,
			j = this.n31,
			m = this.n32,
			o = this.n33,
			w = this.n34,
			u = this.n41,
			t = this.n42,
			x = this.n43,
			A = this.n44;
		return d * h * m * u - c * k * m * u - d * g * o * u + b * k * o * u + c * g * w * u - b * h * w * u - d * h * j * t + c * k * j * t + d * f * o * t - a * k * o * t - c * f * w * t + a * h * w * t + d * g * j * x - b * k *
			j * x - d * f * m * x + a * k * m * x + b * f * w * x - a * g * w * x - c * g * j * A + b * h * j * A + c * f * m * A - a * h * m * A - b * f * o * A + a * g * o * A
	},
	transpose: function() {
		function a(b, c, d) {
			var f = b[c];
			b[c] = b[d];
			b[d] = f
		}
		a(this, "n21", "n12");
		a(this, "n31", "n13");
		a(this, "n32", "n23");
		a(this, "n41", "n14");
		a(this, "n42", "n24");
		a(this, "n43", "n34");
		return this
	},
	clone: function() {
		var a = new THREE.Matrix4;
		a.n11 = this.n11;
		a.n12 = this.n12;
		a.n13 = this.n13;
		a.n14 = this.n14;
		a.n21 = this.n21;
		a.n22 = this.n22;
		a.n23 = this.n23;
		a.n24 = this.n24;
		a.n31 = this.n31;
		a.n32 = this.n32;
		a.n33 = this.n33;
		a.n34 = this.n34;
		a.n41 = this.n41;
		a.n42 = this.n42;
		a.n43 = this.n43;
		a.n44 = this.n44;
		return a
	},
	flatten: function() {
		var a = this.flat;
		a[0] = this.n11;
		a[1] = this.n21;
		a[2] = this.n31;
		a[3] = this.n41;
		a[4] = this.n12;
		a[5] = this.n22;
		a[6] = this.n32;
		a[7] = this.n42;
		a[8] = this.n13;
		a[9] = this.n23;
		a[10] = this.n33;
		a[11] = this.n43;
		a[12] = this.n14;
		a[13] = this.n24;
		a[14] = this.n34;
		a[15] = this.n44;
		return a
	},
	flattenToArray: function(a) {
		a[0] = this.n11;
		a[1] = this.n21;
		a[2] = this.n31;
		a[3] = this.n41;
		a[4] = this.n12;
		a[5] = this.n22;
		a[6] = this.n32;
		a[7] = this.n42;
		a[8] = this.n13;
		a[9] =
			this.n23;
		a[10] = this.n33;
		a[11] = this.n43;
		a[12] = this.n14;
		a[13] = this.n24;
		a[14] = this.n34;
		a[15] = this.n44;
		return a
	},
	flattenToArrayOffset: function(a, b) {
		a[b] = this.n11;
		a[b + 1] = this.n21;
		a[b + 2] = this.n31;
		a[b + 3] = this.n41;
		a[b + 4] = this.n12;
		a[b + 5] = this.n22;
		a[b + 6] = this.n32;
		a[b + 7] = this.n42;
		a[b + 8] = this.n13;
		a[b + 9] = this.n23;
		a[b + 10] = this.n33;
		a[b + 11] = this.n43;
		a[b + 12] = this.n14;
		a[b + 13] = this.n24;
		a[b + 14] = this.n34;
		a[b + 15] = this.n44;
		return a
	},
	setTranslation: function(a, b, c) {
		this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
		return this
	},
	setScale: function(a,
		b, c) {
		this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
		return this
	},
	setRotX: function(a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
		return this
	},
	setRotY: function(a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
		return this
	},
	setRotZ: function(a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this
	},
	setRotAxis: function(a, b) {
		var c = Math.cos(b),
			d = Math.sin(b),
			f = 1 - c,
			g = a.x,
			h = a.y,
			k = a.z,
			j = f * g,
			m = f * h;
		this.set(j * g + c, j * h - d * k, j *
			k + d * h, 0, j * h + d * k, m * h + c, m * k - d * g, 0, j * k - d * h, m * k + d * g, f * k * k + c, 0, 0, 0, 0, 1);
		return this
	},
	setPosition: function(a) {
		this.n14 = a.x;
		this.n24 = a.y;
		this.n34 = a.z;
		return this
	},
	setRotationFromEuler: function(a) {
		var b = a.x,
			c = a.y,
			d = a.z;
		a = Math.cos(c);
		c = Math.sin(c);
		var f = Math.cos(-d);
		d = Math.sin(-d);
		var g = Math.cos(b);
		b = Math.sin(b);
		var h = a * d,
			k = c * d;
		this.n11 = a * f;
		this.n12 = c * b - h * g;
		this.n13 = h * b + c * g;
		this.n21 = d;
		this.n22 = f * g;
		this.n23 = -f * b;
		this.n31 = -c * f;
		this.n32 = k * g + a * b;
		this.n33 = -k * b + a * g
	},
	setRotationFromQuaternion: function(a) {
		var b = a.x,
			c = a.y,
			d = a.z,
			f = a.w,
			g = b + b,
			h = c + c,
			k = d + d;
		a = b * g;
		var j = b * h;
		b *= k;
		var m = c * h;
		c *= k;
		d *= k;
		g *= f;
		h *= f;
		f *= k;
		this.n11 = 1 - (m + d);
		this.n12 = j - f;
		this.n13 = b + h;
		this.n21 = j + f;
		this.n22 = 1 - (a + d);
		this.n23 = c - g;
		this.n31 = b - h;
		this.n32 = c + g;
		this.n33 = 1 - (a + m)
	},
	scale: function(a) {
		var b = a.x,
			c = a.y;
		a = a.z;
		this.n11 *= b;
		this.n12 *= b;
		this.n13 *= b;
		this.n21 *= c;
		this.n22 *= c;
		this.n23 *= c;
		this.n31 *= a;
		this.n32 *= a;
		this.n33 *= a;
		return this
	},
	extractRotationMatrix: function(a) {
		a.n11 = this.n11;
		a.n12 = this.n12;
		a.n13 = this.n13;
		a.n14 = 0;
		a.n21 = this.n21;
		a.n22 = this.n22;
		a.n23 =
			this.n23;
		a.n24 = 0;
		a.n31 = this.n31;
		a.n32 = this.n32;
		a.n33 = this.n33;
		a.n34 = 0;
		a.n41 = 0;
		a.n42 = 0;
		a.n43 = 0;
		a.n44 = 1
	},
	toString: function() {
		return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |"
	}
};
THREE.Matrix4.translationMatrix = function(a, b, c) {
	var d = new THREE.Matrix4;
	d.setTranslation(a, b, c);
	return d
};
THREE.Matrix4.scaleMatrix = function(a, b, c) {
	var d = new THREE.Matrix4;
	d.setScale(a, b, c);
	return d
};
THREE.Matrix4.rotationXMatrix = function(a) {
	var b = new THREE.Matrix4;
	b.setRotX(a);
	return b
};
THREE.Matrix4.rotationYMatrix = function(a) {
	var b = new THREE.Matrix4;
	b.setRotY(a);
	return b
};
THREE.Matrix4.rotationZMatrix = function(a) {
	var b = new THREE.Matrix4;
	b.setRotZ(a);
	return b
};
THREE.Matrix4.rotationAxisAngleMatrix = function(a, b) {
	var c = new THREE.Matrix4;
	c.setRotAxis(a, b);
	return c
};
THREE.Matrix4.makeInvert = function(a, b) {
	var c = a.n11,
		d = a.n12,
		f = a.n13,
		g = a.n14,
		h = a.n21,
		k = a.n22,
		j = a.n23,
		m = a.n24,
		o = a.n31,
		w = a.n32,
		u = a.n33,
		t = a.n34,
		x = a.n41,
		A = a.n42,
		F = a.n43,
		v = a.n44;
	b === undefined && (b = new THREE.Matrix4);
	b.n11 = j * t * A - m * u * A + m * w * F - k * t * F - j * w * v + k * u * v;
	b.n12 = g * u * A - f * t * A - g * w * F + d * t * F + f * w * v - d * u * v;
	b.n13 = f * m * A - g * j * A + g * k * F - d * m * F - f * k * v + d * j * v;
	b.n14 = g * j * w - f * m * w - g * k * u + d * m * u + f * k * t - d * j * t;
	b.n21 = m * u * x - j * t * x - m * o * F + h * t * F + j * o * v - h * u * v;
	b.n22 = f * t * x - g * u * x + g * o * F - c * t * F - f * o * v + c * u * v;
	b.n23 = g * j * x - f * m * x - g * h * F + c * m * F + f * h * v - c * j * v;
	b.n24 = f * m * o - g * j * o + g * h * u - c * m * u - f * h * t + c * j * t;
	b.n31 = k * t * x - m * w * x + m * o * A - h * t * A - k * o * v + h * w * v;
	b.n32 = g * w * x - d * t * x - g * o * A + c * t * A + d * o * v - c * w * v;
	b.n33 = f * m * x - g * k * x + g * h * A - c * m * A - d * h * v + c * k * v;
	b.n34 = g * k * o - d * m * o - g * h * w + c * m * w + d * h * t - c * k * t;
	b.n41 = j * w * x - k * u * x - j * o * A + h * u * A + k * o * F - h * w * F;
	b.n42 = d * u * x - f * w * x + f * o * A - c * u * A - d * o * F + c * w * F;
	b.n43 = f * k * x - d * j * x - f * h * A + c * j * A + d * h * F - c * k * F;
	b.n44 = d * j * o - f * k * o + f * h * w - c * j * w - d * h * u + c * k * u;
	b.multiplyScalar(1 / a.determinant());
	return b
};
THREE.Matrix4.makeInvert3x3 = function(a) {
	var b = a.m33,
		c = b.m,
		d = a.n33 * a.n22 - a.n32 * a.n23,
		f = -a.n33 * a.n21 + a.n31 * a.n23,
		g = a.n32 * a.n21 - a.n31 * a.n22,
		h = -a.n33 * a.n12 + a.n32 * a.n13,
		k = a.n33 * a.n11 - a.n31 * a.n13,
		j = -a.n32 * a.n11 + a.n31 * a.n12,
		m = a.n23 * a.n12 - a.n22 * a.n13,
		o = -a.n23 * a.n11 + a.n21 * a.n13,
		w = a.n22 * a.n11 - a.n21 * a.n12;
	a = a.n11 * d + a.n21 * h + a.n31 * m;
	if (a == 0) throw "matrix not invertible";
	a = 1 / a;
	c[0] = a * d;
	c[1] = a * f;
	c[2] = a * g;
	c[3] = a * h;
	c[4] = a * k;
	c[5] = a * j;
	c[6] = a * m;
	c[7] = a * o;
	c[8] = a * w;
	return b
};
THREE.Matrix4.makeFrustum = function(a, b, c, d, f, g) {
	var h;
	h = new THREE.Matrix4;
	h.n11 = 2 * f / (b - a);
	h.n12 = 0;
	h.n13 = (b + a) / (b - a);
	h.n14 = 0;
	h.n21 = 0;
	h.n22 = 2 * f / (d - c);
	h.n23 = (d + c) / (d - c);
	h.n24 = 0;
	h.n31 = 0;
	h.n32 = 0;
	h.n33 = -(g + f) / (g - f);
	h.n34 = -2 * g * f / (g - f);
	h.n41 = 0;
	h.n42 = 0;
	h.n43 = -1;
	h.n44 = 0;
	return h
};
THREE.Matrix4.makePerspective = function(a, b, c, d) {
	var f;
	a = c * Math.tan(a * Math.PI / 360);
	f = -a;
	return THREE.Matrix4.makeFrustum(f * b, a * b, f, a, c, d)
};
THREE.Matrix4.makeOrtho = function(a, b, c, d, f, g) {
	var h, k, j, m;
	h = new THREE.Matrix4;
	k = b - a;
	j = c - d;
	m = g - f;
	h.n11 = 2 / k;
	h.n12 = 0;
	h.n13 = 0;
	h.n14 = -((b + a) / k);
	h.n21 = 0;
	h.n22 = 2 / j;
	h.n23 = 0;
	h.n24 = -((c + d) / j);
	h.n31 = 0;
	h.n32 = 0;
	h.n33 = -2 / m;
	h.n34 = -((g + f) / m);
	h.n41 = 0;
	h.n42 = 0;
	h.n43 = 0;
	h.n44 = 1;
	return h
};
THREE.Matrix4.__tmpVec1 = new THREE.Vector3;
THREE.Matrix4.__tmpVec2 = new THREE.Vector3;
THREE.Matrix4.__tmpVec3 = new THREE.Vector3;
THREE.Quaternion = function(a, b, c, d) {
	this.x = a || 0;
	this.y = b || 0;
	this.z = c || 0;
	this.w = d !== undefined ? d : 1
};
THREE.Quaternion.prototype.set = function(a, b, c, d) {
	this.x = a;
	this.y = b;
	this.z = c;
	this.w = d;
	return this
};
THREE.Quaternion.prototype.setFromEuler = function(a) {
	var b = 0.5 * Math.PI / 360,
		c = a.x * b,
		d = a.y * b,
		f = a.z * b;
	a = Math.cos(d);
	d = Math.sin(d);
	b = Math.cos(-f);
	f = Math.sin(-f);
	var g = Math.cos(c);
	c = Math.sin(c);
	var h = a * b,
		k = d * f;
	this.w = h * g - k * c;
	this.x = h * c + k * g;
	this.y = d * b * g + a * f * c;
	this.z = a * f * g - d * b * c;
	return this
};
THREE.Quaternion.prototype.calculateW = function() {
	this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
	return this
};
THREE.Quaternion.prototype.inverse = function() {
	this.x *= -1;
	this.y *= -1;
	this.z *= -1;
	return this
};
THREE.Quaternion.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
};
THREE.Quaternion.prototype.normalize = function() {
	var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	if (a == 0) this.w = this.z = this.y = this.x = 0;
	else {
		a = 1 / a;
		this.x *= a;
		this.y *= a;
		this.z *= a;
		this.w *= a
	}
	return this
};
THREE.Quaternion.prototype.multiplySelf = function(a) {
	var b = this.x,
		c = this.y,
		d = this.z,
		f = this.w,
		g = a.x,
		h = a.y,
		k = a.z;
	a = a.w;
	this.x = b * a + f * g + c * k - d * h;
	this.y = c * a + f * h + d * g - b * k;
	this.z = d * a + f * k + b * h - c * g;
	this.w = f * a - b * g - c * h - d * k;
	return this
};
THREE.Quaternion.prototype.multiplyVector3 = function(a, b) {
	b || (b = a);
	var c = a.x,
		d = a.y,
		f = a.z,
		g = this.x,
		h = this.y,
		k = this.z,
		j = this.w,
		m = j * c + h * f - k * d,
		o = j * d + k * c - g * f,
		w = j * f + g * d - h * c;
	c = -g * c - h * d - k * f;
	b.x = m * j + c * -g + o * -k - w * -h;
	b.y = o * j + c * -h + w * -g - m * -k;
	b.z = w * j + c * -k + m * -h - o * -g;
	return b
};
THREE.Quaternion.prototype.toMatrix3 = function() {};
THREE.Quaternion.prototype.toMatrix4 = function() {};
THREE.Quaternion.slerp = function(a, b, c, d) {
	var f = a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z;
	if (Math.abs(f) >= 1) {
		c.w = a.w;
		c.x = a.x;
		c.y = a.y;
		c.z = a.z;
		return c
	}
	var g = Math.acos(f),
		h = Math.sqrt(1 - f * f);
	if (Math.abs(h) < 0.0010) {
		c.w = 0.5 * (a.w + b.w);
		c.x = 0.5 * (a.x + b.x);
		c.y = 0.5 * (a.y + b.y);
		c.z = 0.5 * (a.z + b.z);
		return c
	}
	f = Math.sin((1 - d) * g) / h;
	d = Math.sin(d * g) / h;
	c.w = a.w * f + b.w * d;
	c.x = a.x * f + b.x * d;
	c.y = a.y * f + b.y * d;
	c.z = a.z * f + b.z * d;
	return c
};
THREE.Vertex = function(a, b) {
	this.position = a || new THREE.Vector3;
	this.positionWorld = new THREE.Vector3;
	this.positionScreen = new THREE.Vector4;
	this.normal = b || new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.normalScreen = new THREE.Vector3;
	this.tangent = new THREE.Vector4;
	this.__visible = !0
};
THREE.Vertex.prototype = {
	toString: function() {
		return "THREE.Vertex ( position: " + this.position + ", normal: " + this.normal + " )"
	}
};
THREE.Face3 = function(a, b, c, d, f) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.centroid = new THREE.Vector3;
	this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
	this.vertexNormals = d instanceof Array ? d : [];
	this.materials = f instanceof Array ? f : [f]
};
THREE.Face3.prototype = {
	toString: function() {
		return "THREE.Face3 ( " + this.a + ", " + this.b + ", " + this.c + " )"
	}
};
THREE.Face4 = function(a, b, c, d, f, g) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.centroid = new THREE.Vector3;
	this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3;
	this.vertexNormals = f instanceof Array ? f : [];
	this.materials = g instanceof Array ? g : [g]
};
THREE.Face4.prototype = {
	toString: function() {
		return "THREE.Face4 ( " + this.a + ", " + this.b + ", " + this.c + " " + this.d + " )"
	}
};
THREE.UV = function(a, b) {
	this.u = a || 0;
	this.v = b || 0
};
THREE.UV.prototype = {
	copy: function(a) {
		this.u = a.u;
		this.v = a.v
	},
	toString: function() {
		return "THREE.UV (" + this.u + ", " + this.v + ")"
	}
};
THREE.Geometry = function() {
	this.id = "Geometry" + THREE.GeometryIdCounter++;
	this.vertices = [];
	this.faces = [];
	this.uvs = [];
	this.uvs2 = [];
	this.colors = [];
	this.skinWeights = [];
	this.skinIndices = [];
	this.boundingSphere = this.boundingBox = null;
	this.geometryChunks = {};
	this.hasTangents = !1
};
THREE.Geometry.prototype = {
	computeCentroids: function() {
		var a, b, c;
		a = 0;
		for (b = this.faces.length; a < b; a++) {
			c = this.faces[a];
			c.centroid.set(0, 0, 0);
			if (c instanceof THREE.Face3) {
				c.centroid.addSelf(this.vertices[c.a].position);
				c.centroid.addSelf(this.vertices[c.b].position);
				c.centroid.addSelf(this.vertices[c.c].position);
				c.centroid.divideScalar(3)
			} else if (c instanceof THREE.Face4) {
				c.centroid.addSelf(this.vertices[c.a].position);
				c.centroid.addSelf(this.vertices[c.b].position);
				c.centroid.addSelf(this.vertices[c.c].position);
				c.centroid.addSelf(this.vertices[c.d].position);
				c.centroid.divideScalar(4)
			}
		}
	},
	computeFaceNormals: function(a) {
		var b, c, d, f, g, h, k = new THREE.Vector3,
			j = new THREE.Vector3;
		d = 0;
		for (f = this.vertices.length; d < f; d++) {
			g = this.vertices[d];
			g.normal.set(0, 0, 0)
		}
		d = 0;
		for (f = this.faces.length; d < f; d++) {
			g = this.faces[d];
			if (a && g.vertexNormals.length) {
				k.set(0, 0, 0);
				b = 0;
				for (c = g.normal.length; b < c; b++) k.addSelf(g.vertexNormals[b]);
				k.divideScalar(3)
			} else {
				b = this.vertices[g.a];
				c = this.vertices[g.b];
				h = this.vertices[g.c];
				k.sub(h.position,
					c.position);
				j.sub(b.position, c.position);
				k.crossSelf(j)
			}
			k.isZero() || k.normalize();
			g.normal.copy(k)
		}
	},
	computeVertexNormals: function() {
		var a, b, c, d;
		if (this.__tmpVertices == undefined) {
			d = this.__tmpVertices = Array(this.vertices.length);
			a = 0;
			for (b = this.vertices.length; a < b; a++) d[a] = new THREE.Vector3;
			a = 0;
			for (b = this.faces.length; a < b; a++) {
				c = this.faces[a];
				if (c instanceof THREE.Face3) c.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
				else if (c instanceof THREE.Face4) c.vertexNormals = [new THREE.Vector3,
					new THREE.Vector3, new THREE.Vector3, new THREE.Vector3
				]
			}
		} else {
			d = this.__tmpVertices;
			a = 0;
			for (b = this.vertices.length; a < b; a++) d[a].set(0, 0, 0)
		}
		a = 0;
		for (b = this.faces.length; a < b; a++) {
			c = this.faces[a];
			if (c instanceof THREE.Face3) {
				d[c.a].addSelf(c.normal);
				d[c.b].addSelf(c.normal);
				d[c.c].addSelf(c.normal)
			} else if (c instanceof THREE.Face4) {
				d[c.a].addSelf(c.normal);
				d[c.b].addSelf(c.normal);
				d[c.c].addSelf(c.normal);
				d[c.d].addSelf(c.normal)
			}
		}
		a = 0;
		for (b = this.vertices.length; a < b; a++) d[a].normalize();
		a = 0;
		for (b = this.faces.length; a <
			b; a++) {
			c = this.faces[a];
			if (c instanceof THREE.Face3) {
				c.vertexNormals[0].copy(d[c.a]);
				c.vertexNormals[1].copy(d[c.b]);
				c.vertexNormals[2].copy(d[c.c])
			} else if (c instanceof THREE.Face4) {
				c.vertexNormals[0].copy(d[c.a]);
				c.vertexNormals[1].copy(d[c.b]);
				c.vertexNormals[2].copy(d[c.c]);
				c.vertexNormals[3].copy(d[c.d])
			}
		}
	},
	computeTangents: function() {
		function a(G, U, na, W, ka, ha, da) {
			g = G.vertices[U].position;
			h = G.vertices[na].position;
			k = G.vertices[W].position;
			j = f[ka];
			m = f[ha];
			o = f[da];
			w = h.x - g.x;
			u = k.x - g.x;
			t = h.y - g.y;
			x =
				k.y - g.y;
			A = h.z - g.z;
			F = k.z - g.z;
			v = m.u - j.u;
			I = o.u - j.u;
			q = m.v - j.v;
			J = o.v - j.v;
			e = 1 / (v * J - I * q);
			M.set((J * w - q * u) * e, (J * t - q * x) * e, (J * A - q * F) * e);
			V.set((v * u - I * w) * e, (v * x - I * t) * e, (v * F - I * A) * e);
			aa[U].addSelf(M);
			aa[na].addSelf(M);
			aa[W].addSelf(M);
			L[U].addSelf(V);
			L[na].addSelf(V);
			L[W].addSelf(V)
		}
		var b, c, d, f, g, h, k, j, m, o, w, u, t, x, A, F, v, I, q, J, e, aa = [],
			L = [],
			M = new THREE.Vector3,
			V = new THREE.Vector3,
			S = new THREE.Vector3,
			Y = new THREE.Vector3,
			Z = new THREE.Vector3;
		b = 0;
		for (c = this.vertices.length; b < c; b++) {
			aa[b] = new THREE.Vector3;
			L[b] = new THREE.Vector3
		}
		b =
			0;
		for (c = this.faces.length; b < c; b++) {
			d = this.faces[b];
			f = this.uvs[b];
			if (d instanceof THREE.Face3) {
				a(this, d.a, d.b, d.c, 0, 1, 2);
				this.vertices[d.a].normal.copy(d.vertexNormals[0]);
				this.vertices[d.b].normal.copy(d.vertexNormals[1]);
				this.vertices[d.c].normal.copy(d.vertexNormals[2])
			} else if (d instanceof THREE.Face4) {
				a(this, d.a, d.b, d.c, 0, 1, 2);
				a(this, d.a, d.b, d.d, 0, 1, 3);
				this.vertices[d.a].normal.copy(d.vertexNormals[0]);
				this.vertices[d.b].normal.copy(d.vertexNormals[1]);
				this.vertices[d.c].normal.copy(d.vertexNormals[2]);
				this.vertices[d.d].normal.copy(d.vertexNormals[3])
			}
		}
		b = 0;
		for (c = this.vertices.length; b < c; b++) {
			Z.copy(this.vertices[b].normal);
			d = aa[b];
			S.copy(d);
			S.subSelf(Z.multiplyScalar(Z.dot(d))).normalize();
			Y.cross(this.vertices[b].normal, d);
			d = Y.dot(L[b]);
			d = d < 0 ? -1 : 1;
			this.vertices[b].tangent.set(S.x, S.y, S.z, d)
		}
		this.hasTangents = !0
	},
	computeBoundingBox: function() {
		var a;
		if (this.vertices.length > 0) {
			this.boundingBox = {
				x: [this.vertices[0].position.x, this.vertices[0].position.x],
				y: [this.vertices[0].position.y, this.vertices[0].position.y],
				z: [this.vertices[0].position.z, this.vertices[0].position.z]
			};
			for (var b = 1, c = this.vertices.length; b < c; b++) {
				a = this.vertices[b];
				if (a.position.x < this.boundingBox.x[0]) this.boundingBox.x[0] = a.position.x;
				else if (a.position.x > this.boundingBox.x[1]) this.boundingBox.x[1] = a.position.x;
				if (a.position.y < this.boundingBox.y[0]) this.boundingBox.y[0] = a.position.y;
				else if (a.position.y > this.boundingBox.y[1]) this.boundingBox.y[1] = a.position.y;
				if (a.position.z < this.boundingBox.z[0]) this.boundingBox.z[0] = a.position.z;
				else if (a.position.z >
					this.boundingBox.z[1]) this.boundingBox.z[1] = a.position.z
			}
		}
	},
	computeBoundingSphere: function() {
		for (var a = this.boundingSphere === null ? 0 : this.boundingSphere.radius, b = 0, c = this.vertices.length; b < c; b++) a = Math.max(a, this.vertices[b].position.length());
		this.boundingSphere = {
			radius: a
		}
	},
	sortFacesByMaterial: function() {
		function a(o) {
			var w = [];
			b = 0;
			for (c = o.length; b < c; b++) o[b] == undefined ? w.push("undefined") : w.push(o[b].id);
			return w.join("_")
		}
		var b, c, d, f, g, h, k, j, m = {};
		d = 0;
		for (f = this.faces.length; d < f; d++) {
			g = this.faces[d];
			h = g.materials;
			k = a(h);
			m[k] == undefined && (m[k] = {
				hash: k,
				counter: 0
			});
			j = m[k].hash + "_" + m[k].counter;
			this.geometryChunks[j] == undefined && (this.geometryChunks[j] = {
				faces: [],
				materials: h,
				vertices: 0
			});
			g = g instanceof THREE.Face3 ? 3 : 4;
			if (this.geometryChunks[j].vertices + g > 65535) {
				m[k].counter += 1;
				j = m[k].hash + "_" + m[k].counter;
				this.geometryChunks[j] == undefined && (this.geometryChunks[j] = {
					faces: [],
					materials: h,
					vertices: 0
				})
			}
			this.geometryChunks[j].faces.push(d);
			this.geometryChunks[j].vertices += g
		}
	},
	toString: function() {
		return "THREE.Geometry ( vertices: " +
			this.vertices + ", faces: " + this.faces + ", uvs: " + this.uvs + " )"
	}
};
THREE.GeometryIdCounter = 0;
THREE.Object3D = function() {
	this.id = THREE.Object3DCounter.value++;
	this.parent = undefined;
	this.children = [];
	this.position = new THREE.Vector3;
	this.rotation = new THREE.Vector3;
	this.scale = new THREE.Vector3(1, 1, 1);
	this.matrixRotation = new THREE.Matrix4;
	this.localMatrix = new THREE.Matrix4;
	this.globalMatrix = new THREE.Matrix4;
	this.matrixAutoUpdate = !0;
	this.matrixNeedsUpdate = !0;
	this.quaternion = new THREE.Quaternion;
	this.useQuaternion = !1;
	this.screenPosition = new THREE.Vector4;
	this.boundRadius = 0;
	this.boundRadiusScale =
		1;
	this.visible = !0
};
THREE.Object3D.prototype.update = function(a, b, c) {
	if (this.visible) {
		this.matrixAutoUpdate && (b |= this.updateMatrix());
		if (b || this.matrixNeedsUpdate) {
			a ? this.globalMatrix.multiply(a, this.localMatrix) : this.globalMatrix.copy(this.localMatrix);
			this.matrixNeedsUpdate = !1;
			b = !0
		}
		var d = this.children.length;
		for (a = 0; a < d; a++) this.children[a].update(this.globalMatrix, b, c)
	}
};
THREE.Object3D.prototype.updateMatrix = function() {
	this.localMatrix.setPosition(this.position);
	this.useQuaternion ? this.localMatrix.setRotationFromQuaternion(this.quaternion) : this.localMatrix.setRotationFromEuler(this.rotation);
	if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) {
		this.localMatrix.scale(this.scale);
		this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))
	}
	return !0
};
THREE.Object3D.prototype.addChild = function(a) {
	if (this.children.indexOf(a) === -1) {
		a.parent !== undefined && a.parent.removeChild(a);
		a.parent = this;
		this.children.push(a)
	}
};
THREE.Object3D.prototype.removeChild = function(a) {
	var b = this.children.indexOf(a);
	if (b !== -1) {
		this.children.splice(b, 1);
		a.parent = undefined
	}
};
THREE.Object3DCounter = {
	value: 0
};
THREE.Particle = function(a) {
	THREE.Object3D.call(this);
	this.materials = a instanceof Array ? a : [a];
	this.matrixAutoUpdate = !1
};
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function(a, b) {
	THREE.Object3D.call(this);
	this.geometry = a;
	this.materials = b instanceof Array ? b : [b];
	this.sortParticles = !1
};
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function(a, b, c) {
	THREE.Object3D.call(this);
	this.geometry = a;
	this.materials = b instanceof Array ? b : [b];
	this.type = c != undefined ? c : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function(a, b) {
	THREE.Object3D.call(this);
	this.geometry = a;
	this.materials = b && b.length ? b : [b];
	this.flipSided = !1;
	this.doubleSided = !1;
	this.overdraw = !1;
	if (this.geometry) {
		this.geometry.boundingSphere || this.geometry.computeBoundingSphere();
		this.boundRadius = a.boundingSphere.radius
	}
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Bone = function(a) {
	THREE.Object3D.call(this);
	this.skin = a;
	this.skinMatrix = new THREE.Matrix4;
	this.hasNoneBoneChildren = !1
};
THREE.Bone.prototype = new THREE.Object3D;
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function(a, b, c) {
	this.matrixAutoUpdate && (b |= this.updateMatrix());
	if (b || this.matrixNeedsUpdate) {
		a ? this.skinMatrix.multiply(a, this.localMatrix) : this.skinMatrix.copy(this.localMatrix);
		this.matrixNeedsUpdate = !1;
		b = !0
	}
	var d, f = this.children.length;
	if (this.hasNoneBoneChildren) {
		this.globalMatrix.multiply(this.skin.globalMatrix, this.skinMatrix);
		for (d = 0; d < f; d++) {
			a = this.children[d];
			a instanceof THREE.Bone ? a.update(this.skinMatrix, b, c) : a.update(this.globalMatrix, !0, c)
		}
	} else
		for (d = 0; d <
			f; d++) this.children[d].update(this.skinMatrix, b, c)
};
THREE.Bone.prototype.addChild = function(a) {
	if (this.children.indexOf(a) === -1) {
		a.parent !== undefined && a.parent.removeChild(a);
		a.parent = this;
		this.children.push(a);
		if (!(a instanceof THREE.Bone)) this.hasNoneBoneChildren = !0
	}
};
if (!window.Float32Array) window.Float32Array = Array;
THREE.SkinnedMesh = function(a, b) {
	THREE.Mesh.call(this, a, b);
	this.identityMatrix = new THREE.Matrix4;
	this.bones = [];
	this.boneMatrices = [];
	var c, d, f, g, h, k;
	if (this.geometry.bones !== undefined) {
		for (c = 0; c < this.geometry.bones.length; c++) {
			f = this.geometry.bones[c];
			g = f.pos;
			h = f.rotq;
			k = f.scl;
			d = this.addBone();
			d.name = f.name;
			d.position.set(g[0], g[1], g[2]);
			d.quaternion.set(h[0], h[1], h[2], h[3]);
			k !== undefined ? d.scale.set(k[0], k[1], k[2]) : d.scale.set(1, 1, 1)
		}
		for (c = 0; c < this.bones.length; c++) {
			f = this.geometry.bones[c];
			d = this.bones[c];
			f.parent === -1 ? this.addChild(d) : this.bones[f.parent].addChild(d)
		}
		this.boneMatrices = new Float32Array(16 * this.bones.length);
		this.pose()
	}
};
THREE.SkinnedMesh.prototype = new THREE.Mesh;
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.update = function(a, b, c) {
	if (this.visible) {
		this.matrixAutoUpdate && (b |= this.updateMatrix());
		if (b || this.matrixNeedsUpdate) {
			a ? this.globalMatrix.multiply(a, this.localMatrix) : this.globalMatrix.copy(this.localMatrix);
			this.matrixNeedsUpdate = !1;
			b = !0
		}
		var d, f = this.children.length;
		for (d = 0; d < f; d++) {
			a = this.children[d];
			a instanceof THREE.Bone ? a.update(this.identityMatrix, !1, c) : a.update(this.globalMatrix, b, c)
		}
	}
};
THREE.SkinnedMesh.prototype.addBone = function(a) {
	a === undefined && (a = new THREE.Bone(this));
	this.bones.push(a);
	return a
};
THREE.SkinnedMesh.prototype.pose = function() {
	this.update(undefined, !0);
	for (var a, b = [], c = 0; c < this.bones.length; c++) {
		a = this.bones[c];
		b.push(THREE.Matrix4.makeInvert(a.skinMatrix));
		a.skinMatrix.flattenToArrayOffset(this.boneMatrices, c * 16)
	}
	if (this.geometry.skinVerticesA === undefined) {
		this.geometry.skinVerticesA = [];
		this.geometry.skinVerticesB = [];
		var d;
		for (a = 0; a < this.geometry.skinIndices.length; a++) {
			c = this.geometry.vertices[a].position;
			var f = this.geometry.skinIndices[a].x,
				g = this.geometry.skinIndices[a].y;
			d = new THREE.Vector3(c.x, c.y, c.z);
			this.geometry.skinVerticesA.push(b[f].multiplyVector3(d));
			d = new THREE.Vector3(c.x, c.y, c.z);
			this.geometry.skinVerticesB.push(b[g].multiplyVector3(d));
			if (this.geometry.skinWeights[a].x + this.geometry.skinWeights[a].y !== 1) {
				c = (1 - (this.geometry.skinWeights[a].x + this.geometry.skinWeights[a].y)) * 0.5;
				this.geometry.skinWeights[a].x += c;
				this.geometry.skinWeights[a].y += c
			}
		}
	}
};
THREE.Ribbon = function(a, b) {
	THREE.Object3D.call(this);
	this.geometry = a;
	this.materials = b instanceof Array ? b : [b];
	this.flipSided = !1;
	this.doubleSided = !1
};
THREE.Ribbon.prototype = new THREE.Object3D;
THREE.Ribbon.prototype.constructor = THREE.Ribbon;
THREE.AnimationHandler = function() {
	var a = [],
		b = {};
	b.update = function(c) {
		for (var d = 0; d < a.length; d++) a[d].update(c)
	};
	b.add = function(c) {
		a.indexOf(c) === -1 && a.push(c)
	};
	b.remove = function(c) {
		a.indexOf(c) !== -1 && a.splice(childIndex, 1)
	};
	b.initData = function(c) {
		if (c.initialized !== !0) {
			for (var d = 0; d < c.hierarchy.length; d++)
				for (var f = 0; f < c.hierarchy[d].keys.length; f++) {
					if (c.hierarchy[d].keys[f].time < 0) c.hierarchy[d].keys[f].time = 0;
					c.hierarchy[d].keys[f].index = f;
					if (c.hierarchy[d].keys[f].rot !== undefined && !(c.hierarchy[d].keys[f].rot instanceof THREE.Quaternion)) {
						var g = c.hierarchy[d].keys[f].rot;
						c.hierarchy[d].keys[f].rot = new THREE.Quaternion(g[0], g[1], g[2], g[3])
					}
				}
			f = parseInt(c.length * c.fps, 10);
			c.JIT = {};
			c.JIT.hierarchy = [];
			for (d = 0; d < c.hierarchy.length; d++) c.JIT.hierarchy.push(Array(f));
			c.initialized = !0
		}
	};
	return b
}();
THREE.Animation = function(a, b) {
	this.root = a;
	this.data = b;
	this.hierarchy = [];
	this.startTime = 0;
	this.isPlaying = !1;
	this.loop = !0;
	this.offset = 0;
	this.data.initialized || THREE.AnimationHandler.initData(this.data);
	if (a instanceof THREE.SkinnedMesh)
		for (var c = 0; c < this.root.bones.length; c++) this.hierarchy.push(this.root.bones[c])
};
THREE.Animation.prototype.play = function() {
	if (!this.isPlaying) {
		this.isPlaying = !0;
		this.startTime = (new Date).getTime() * 0.0010;
		for (var a = 0; a < this.hierarchy.length; a++) {
			this.hierarchy[a].useQuaternion = !0;
			this.hierarchy[a].matrixAutoUpdate = !0;
			if (this.hierarchy[a].prevKey === undefined) {
				this.hierarchy[a].prevKey = {
					pos: 0,
					rot: 0,
					scl: 0
				};
				this.hierarchy[a].nextKey = {
					pos: 0,
					rot: 0,
					scl: 0
				}
			}
			this.hierarchy[a].prevKey.pos = this.data.hierarchy[a].keys[0];
			this.hierarchy[a].prevKey.rot = this.data.hierarchy[a].keys[0];
			this.hierarchy[a].prevKey.scl =
				this.data.hierarchy[a].keys[0];
			this.hierarchy[a].nextKey.pos = this.getNextKeyWith("pos", a, 1);
			this.hierarchy[a].nextKey.rot = this.getNextKeyWith("rot", a, 1);
			this.hierarchy[a].nextKey.scl = this.getNextKeyWith("scl", a, 1)
		}
		this.update();
		THREE.AnimationHandler.add(this)
	}
};
THREE.Animation.prototype.pause = function() {
	THREE.AnimationHandler.remove(this)
};
THREE.Animation.prototype.stop = function() {
	this.isPlaying = !1;
	THREE.AnimationHandler.remove(this)
};
THREE.Animation.prototype.update = function() {
	if (this.isPlaying) {
		var a = ["pos", "rot", "scl"],
			b, c, d, f, g, h, k = this.data.JIT.hierarchy,
			j = (new Date).getTime() * 0.0010 - this.startTime + this.offset,
			m = j;
		if (j > this.data.length) {
			for (; j > this.data.length;) j -= this.data.length;
			this.startTime = (new Date).getTime() * 0.0010 - j;
			j = (new Date).getTime() * 0.0010 - this.startTime
		}
		h = Math.min(parseInt(j * this.data.fps), parseInt(this.data.length * this.data.fps));
		for (var o = 0, w = this.hierarchy.length; o < w; o++) {
			g = this.hierarchy[o];
			if (k[o][h] !==
				undefined) {
				g.skinMatrix = k[o][h];
				g.matrixAutoUpdate = !1;
				g.matrixNeedsUpdate = !1;
				g.skinMatrix.flattenToArrayOffset(this.root.boneMatrices, o * 16)
			} else
				for (var u = 0; u < 3; u++) {
					c = a[u];
					d = g.prevKey[c];
					f = g.nextKey[c];
					if (f.time < m) {
						if (j < m)
							if (this.loop) {
								d = this.data.hierarchy[o].keys[0];
								f = this.getNextKeyWith(c, o, 1)
							} else {
								this.stop();
								return
							} else {
								do {
									d = f;
									f = this.getNextKeyWith(c, o, f.index + 1)
								} while (f.time < j)
							}
						g.prevKey[c] = d;
						g.nextKey[c] = f
					}
					g.matrixAutoUpdate = !0;
					g.matrixNeedsUpdate = !0;
					b = (j - d.time) / (f.time - d.time);
					d = d[c];
					f =
						f[c];
					if (c === "rot") {
						if (b < 0 || b > 1) {
							console.log("Scale out of bounds:" + b);
							b = b < 0 ? 0 : 1
						}
						THREE.Quaternion.slerp(d, f, g.quaternion, b)
					} else {
						c = c === "pos" ? g.position : g.scale;
						c.x = d[0] + (f[0] - d[0]) * b;
						c.y = d[1] + (f[1] - d[1]) * b;
						c.z = d[2] + (f[2] - d[2]) * b
					}
				}
		}
		if (k[0][h] === undefined) {
			this.hierarchy[0].update(undefined, !0);
			for (o = 0; o < this.hierarchy.length; o++) k[o][h] = this.hierarchy[o].skinMatrix.clone()
		}
	}
};
THREE.Animation.prototype.updateObject = function() {};
THREE.Animation.prototype.getNextKeyWith = function(a, b, c) {
	for (var d = this.data.hierarchy[b].keys; c < d.length; c++)
		if (d[c][a] !== undefined) return d[c];
	return this.data.hierarchy[b].keys[0]
};
THREE.Camera = function(a, b, c, d, f, g) {
	THREE.Object3D.call(this);
	this.FOV = a || 50;
	this.aspect = b || 1;
	this.zNear = c || 0.1;
	this.zFar = d || 2E3;
	this.screenCenterY = this.screenCenterX = 0;
	this.target = g || new THREE.Object3D;
	this.useTarget = !0;
	this.up = new THREE.Vector3(0, 1, 0);
	this.inverseMatrix = new THREE.Matrix4;
	this.projectionMatrix = null;
	this.tmpVec = new THREE.Vector3;
	this.translateX = function(h) {
		this.tmpVec.sub(this.target.position, this.position).normalize().multiplyScalar(h);
		this.tmpVec.crossSelf(this.up);
		this.position.addSelf(this.tmpVec);
		this.target.position.addSelf(this.tmpVec)
	};
	this.translateZ = function(h) {
		this.tmpVec.sub(this.target.position, this.position).normalize().multiplyScalar(h);
		this.position.subSelf(this.tmpVec);
		this.target.position.subSelf(this.tmpVec)
	};
	this.updateProjectionMatrix()
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.supr = THREE.Object3D.prototype;
THREE.Camera.prototype.updateProjectionMatrix = function() {
	this.projectionMatrix = THREE.Matrix4.makePerspective(this.FOV, this.aspect, this.zNear, this.zFar)
};
THREE.Camera.prototype.update = function(a, b, c) {
	if (this.useTarget) {
		this.localMatrix.lookAt(this.position, this.target.position, this.up);
		a ? this.globalMatrix.multiply(a, this.localMatrix) : this.globalMatrix.copy(this.localMatrix);
		THREE.Matrix4.makeInvert(this.globalMatrix, this.inverseMatrix);
		b = !0
	} else {
		this.matrixAutoUpdate && (b |= this.updateMatrix());
		if (b || this.matrixNeedsUpdate) {
			a ? this.globalMatrix.multiply(a, this.localMatrix) : this.globalMatrix.copy(this.localMatrix);
			this.matrixNeedsUpdate = !1;
			b = !0;
			THREE.Matrix4.makeInvert(this.globalMatrix,
				this.inverseMatrix)
		}
	}
	for (a = 0; a < this.children.length; a++) this.children[a].update(this.globalMatrix, b, c)
};
THREE.Camera.prototype.frustumContains = function(a) {
	var b = a.globalMatrix.n14,
		c = a.globalMatrix.n24,
		d = a.globalMatrix.n34,
		f = this.inverseMatrix,
		g = a.boundRadius * a.boundRadiusScale,
		h = f.n31 * b + f.n32 * c + f.n33 * d + f.n34;
	if (h - g > -this.zNear) return !1;
	if (h + g < -this.zFar) return !1;
	h -= g;
	var k = this.projectionMatrix,
		j = 1 / (k.n43 * h),
		m = j * this.screenCenterX,
		o = (f.n11 * b + f.n12 * c + f.n13 * d + f.n14) * k.n11 * m;
	g = k.n11 * g * m;
	if (o + g < -this.screenCenterX) return !1;
	if (o - g > this.screenCenterX) return !1;
	b = (f.n21 * b + f.n22 * c + f.n23 * d + f.n24) * k.n22 * j * this.screenCenterY;
	if (b + g < -this.screenCenterY) return !1;
	if (b - g > this.screenCenterY) return !1;
	a.screenPosition.set(o, b, h, g);
	return !0
};
THREE.Light = function(a) {
	THREE.Object3D.call(this);
	this.color = new THREE.Color(a)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function(a) {
	THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(a, b) {
	THREE.Light.call(this, a);
	this.position = new THREE.Vector3(0, 1, 0);
	this.intensity = b || 1
};
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function(a, b) {
	THREE.Light.call(this, a);
	this.position = new THREE.Vector3;
	this.intensity = b || 1
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.FlatShading = 0;
THREE.SmoothShading = 1;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.BillboardBlending = 3;
THREE.ReverseSubtractiveBlending = 4;
THREE.MaterialCounter = {
	value: 0
};
THREE.LineBasicMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.color = new THREE.Color(16777215);
	this.opacity = 1;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.linewidth = 1;
	this.linejoin = this.linecap = "round";
	this.vertex_colors = !1;
	if (a) {
		a.color !== undefined && this.color.setHex(a.color);
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.blending !== undefined) this.blending = a.blending;
		if (a.depth_test !== undefined) this.depth_test = a.depth_test;
		if (a.linewidth !== undefined) this.linewidth =
			a.linewidth;
		if (a.linecap !== undefined) this.linecap = a.linecap;
		if (a.linejoin !== undefined) this.linejoin = a.linejoin;
		if (a.vertex_colors !== undefined) this.vertex_colors = a.vertex_colors
	}
};
THREE.LineBasicMaterial.prototype = {
	toString: function() {
		return "THREE.LineBasicMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>linewidth: " + this.linewidth + "<br/>linecap: " + this.linecap + "<br/>linejoin: " + this.linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>)"
	}
};
THREE.MeshBasicMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.color = new THREE.Color(16777215);
	this.opacity = 1;
	this.env_map = this.light_map = this.map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refraction_ratio = 0.98;
	this.fog = !0;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.wireframe = !1;
	this.wireframe_linewidth = 1;
	this.wireframe_linejoin = this.wireframe_linecap = "round";
	this.vertex_colors = !1;
	this.skinning = !1;
	if (a) {
		a.color !==
			undefined && this.color.setHex(a.color);
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.map !== undefined) this.map = a.map;
		if (a.light_map !== undefined) this.light_map = a.light_map;
		if (a.env_map !== undefined) this.env_map = a.env_map;
		if (a.combine !== undefined) this.combine = a.combine;
		if (a.reflectivity !== undefined) this.reflectivity = a.reflectivity;
		if (a.refraction_ratio !== undefined) this.refraction_ratio = a.refraction_ratio;
		if (a.fog !== undefined) this.fog = a.fog;
		if (a.shading !== undefined) this.shading = a.shading;
		if (a.blending !==
			undefined) this.blending = a.blending;
		if (a.depth_test !== undefined) this.depth_test = a.depth_test;
		if (a.wireframe !== undefined) this.wireframe = a.wireframe;
		if (a.wireframe_linewidth !== undefined) this.wireframe_linewidth = a.wireframe_linewidth;
		if (a.wireframe_linecap !== undefined) this.wireframe_linecap = a.wireframe_linecap;
		if (a.wireframe_linejoin !== undefined) this.wireframe_linejoin = a.wireframe_linejoin;
		if (a.vertex_colors !== undefined) this.vertex_colors = a.vertex_colors;
		if (a.skinning !== undefined) this.skinning = a.skinning
	}
};
THREE.MeshBasicMaterial.prototype = {
	toString: function() {
		return "THREE.MeshBasicMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>light_map: " + this.light_map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth +
			"<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>skinning: " + this.skinning + "<br/>)"
	}
};
THREE.MeshLambertMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.color = new THREE.Color(16777215);
	this.opacity = 1;
	this.env_map = this.light_map = this.map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refraction_ratio = 0.98;
	this.fog = !0;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.wireframe = !1;
	this.wireframe_linewidth = 1;
	this.wireframe_linejoin = this.wireframe_linecap = "round";
	this.vertex_colors = !1;
	this.skinning = !1;
	if (a) {
		a.color !==
			undefined && this.color.setHex(a.color);
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.map !== undefined) this.map = a.map;
		if (a.light_map !== undefined) this.light_map = a.light_map;
		if (a.env_map !== undefined) this.env_map = a.env_map;
		if (a.combine !== undefined) this.combine = a.combine;
		if (a.reflectivity !== undefined) this.reflectivity = a.reflectivity;
		if (a.refraction_ratio !== undefined) this.refraction_ratio = a.refraction_ratio;
		if (a.fog !== undefined) this.fog = a.fog;
		if (a.shading !== undefined) this.shading = a.shading;
		if (a.blending !==
			undefined) this.blending = a.blending;
		if (a.depth_test !== undefined) this.depth_test = a.depth_test;
		if (a.wireframe !== undefined) this.wireframe = a.wireframe;
		if (a.wireframe_linewidth !== undefined) this.wireframe_linewidth = a.wireframe_linewidth;
		if (a.wireframe_linecap !== undefined) this.wireframe_linecap = a.wireframe_linecap;
		if (a.wireframe_linejoin !== undefined) this.wireframe_linejoin = a.wireframe_linejoin;
		if (a.vertex_colors !== undefined) this.vertex_colors = a.vertex_colors;
		if (a.skinning !== undefined) this.skinning = a.skinning
	}
};
THREE.MeshLambertMaterial.prototype = {
	toString: function() {
		return "THREE.MeshLambertMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>light_map: " + this.light_map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>shading: " + this.shading + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe +
			"<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>skinning: " + this.skinning + "<br/> )"
	}
};
THREE.MeshPhongMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.color = new THREE.Color(16777215);
	this.ambient = new THREE.Color(328965);
	this.specular = new THREE.Color(1118481);
	this.shininess = 30;
	this.opacity = 1;
	this.env_map = this.light_map = this.map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refraction_ratio = 0.98;
	this.fog = !0;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.wireframe = !1;
	this.wireframe_linewidth = 1;
	this.wireframe_linejoin =
		this.wireframe_linecap = "round";
	this.vertex_colors = !1;
	this.skinning = !1;
	if (a) {
		if (a.color !== undefined) this.color = new THREE.Color(a.color);
		if (a.ambient !== undefined) this.ambient = new THREE.Color(a.ambient);
		if (a.specular !== undefined) this.specular = new THREE.Color(a.specular);
		if (a.shininess !== undefined) this.shininess = a.shininess;
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.light_map !== undefined) this.light_map = a.light_map;
		if (a.map !== undefined) this.map = a.map;
		if (a.env_map !== undefined) this.env_map = a.env_map;
		if (a.combine !== undefined) this.combine = a.combine;
		if (a.reflectivity !== undefined) this.reflectivity = a.reflectivity;
		if (a.refraction_ratio !== undefined) this.refraction_ratio = a.refraction_ratio;
		if (a.fog !== undefined) this.fog = a.fog;
		if (a.shading !== undefined) this.shading = a.shading;
		if (a.blending !== undefined) this.blending = a.blending;
		if (a.depth_test !== undefined) this.depth_test = a.depth_test;
		if (a.wireframe !== undefined) this.wireframe = a.wireframe;
		if (a.wireframe_linewidth !== undefined) this.wireframe_linewidth = a.wireframe_linewidth;
		if (a.wireframe_linecap !== undefined) this.wireframe_linecap = a.wireframe_linecap;
		if (a.wireframe_linejoin !== undefined) this.wireframe_linejoin = a.wireframe_linejoin;
		if (a.vertex_colors !== undefined) this.vertex_colors = a.vertex_colors;
		if (a.skinning !== undefined) this.skinning = a.skinning
	}
};
THREE.MeshPhongMaterial.prototype = {
	toString: function() {
		return "THREE.MeshPhongMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>ambient: " + this.ambient + "<br/>specular: " + this.specular + "<br/>shininess: " + this.shininess + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>env_map: " + this.env_map + "<br/>combine: " + this.combine + "<br/>reflectivity: " + this.reflectivity + "<br/>refraction_ratio: " + this.refraction_ratio + "<br/>shading: " + this.shading + "<br/>blending: " + this.blending + "<br/>depth_test: " +
			this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>skinning: " + this.skinning + "<br/>)"
	}
};
THREE.MeshDepthMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.opacity = 1;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.wireframe = !1;
	this.wireframe_linewidth = 1;
	if (a) {
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.shading !== undefined) this.shading = a.shading;
		if (a.blending !== undefined) this.blending = a.blending;
		if (a.depth_test !== undefined) this.depth_test = a.depth_test;
		if (a.wireframe !== undefined) this.wireframe = a.wireframe;
		if (a.wireframe_linewidth !==
			undefined) this.wireframe_linewidth = a.wireframe_linewidth
	}
};
THREE.MeshDepthMaterial.prototype = {
	toString: function() {
		return "THREE.MeshDepthMaterial (<br/>id: " + this.id + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>)"
	}
};
THREE.MeshNormalMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.opacity = 1;
	this.shading = THREE.FlatShading;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.wireframe = !1;
	this.wireframe_linewidth = 1;
	if (a) {
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.shading !== undefined) this.shading = a.shading;
		if (a.blending !== undefined) this.blending = a.blending;
		if (a.depth_test !== undefined) this.depth_test = a.depth_test;
		if (a.wireframe !== undefined) this.wireframe = a.wireframe;
		if (a.wireframe_linewidth !==
			undefined) this.wireframe_linewidth = a.wireframe_linewidth
	}
};
THREE.MeshNormalMaterial.prototype = {
	toString: function() {
		return "THREE.MeshNormalMaterial (<br/>id: " + this.id + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>)"
	}
};
THREE.MeshFaceMaterial = function() {};
THREE.MeshFaceMaterial.prototype = {
	toString: function() {
		return "THREE.MeshFaceMaterial"
	}
};
THREE.MeshShaderMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.vertex_shader = this.fragment_shader = "void main() {}";
	this.uniforms = {};
	this.opacity = 1;
	this.shading = THREE.SmoothShading;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.wireframe = !1;
	this.wireframe_linewidth = 1;
	this.wireframe_linejoin = this.wireframe_linecap = "round";
	this.vertex_colors = !1;
	this.skinning = !1;
	if (a) {
		if (a.fragment_shader !== undefined) this.fragment_shader = a.fragment_shader;
		if (a.vertex_shader !== undefined) this.vertex_shader =
			a.vertex_shader;
		if (a.uniforms !== undefined) this.uniforms = a.uniforms;
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.shading !== undefined) this.shading = a.shading;
		if (a.blending !== undefined) this.blending = a.blending;
		if (a.depth_test !== undefined) this.depth_test = a.depth_test;
		if (a.wireframe !== undefined) this.wireframe = a.wireframe;
		if (a.wireframe_linewidth !== undefined) this.wireframe_linewidth = a.wireframe_linewidth;
		if (a.wireframe_linecap !== undefined) this.wireframe_linecap = a.wireframe_linecap;
		if (a.wireframe_linejoin !==
			undefined) this.wireframe_linejoin = a.wireframe_linejoin;
		if (a.vertex_colors !== undefined) this.vertex_colors = a.vertex_colors;
		if (a.skinning !== undefined) this.skinning = a.skinning
	}
};
THREE.MeshShaderMaterial.prototype = {
	toString: function() {
		return "THREE.MeshShaderMaterial (<br/>id: " + this.id + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>wireframe: " + this.wireframe + "<br/>wireframe_linewidth: " + this.wireframe_linewidth + "<br/>wireframe_linecap: " + this.wireframe_linecap + "<br/>wireframe_linejoin: " + this.wireframe_linejoin + "<br/>vertex_colors: " + this.vertex_colors + "<br/>skinning: " + this.skinning + "<br/>)"
	}
};
THREE.ParticleBasicMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.color = new THREE.Color(16777215);
	this.opacity = 1;
	this.map = null;
	this.size = 1;
	this.blending = THREE.NormalBlending;
	this.depth_test = !0;
	this.offset = new THREE.Vector2;
	this.vertex_colors = !1;
	if (a) {
		a.color !== undefined && this.color.setHex(a.color);
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.map !== undefined) this.map = a.map;
		if (a.size !== undefined) this.size = a.size;
		if (a.blending !== undefined) this.blending = a.blending;
		if (a.depth_test !==
			undefined) this.depth_test = a.depth_test;
		if (a.vertex_colors !== undefined) this.vertex_colors = a.vertex_colors
	}
};
THREE.ParticleBasicMaterial.prototype = {
	toString: function() {
		return "THREE.ParticleBasicMaterial (<br/>id: " + this.id + "<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>map: " + this.map + "<br/>size: " + this.size + "<br/>blending: " + this.blending + "<br/>depth_test: " + this.depth_test + "<br/>vertex_colors: " + this.vertex_colors + "<br/>)"
	}
};
THREE.ParticleCircleMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.color = new THREE.Color(16777215);
	this.opacity = 1;
	this.blending = THREE.NormalBlending;
	if (a) {
		a.color !== undefined && this.color.setHex(a.color);
		if (a.opacity !== undefined) this.opacity = a.opacity;
		if (a.blending !== undefined) this.blending = a.blending
	}
};
THREE.ParticleCircleMaterial.prototype = {
	toString: function() {
		return "THREE.ParticleCircleMaterial (<br/>color: " + this.color + "<br/>opacity: " + this.opacity + "<br/>blending: " + this.blending + "<br/>)"
	}
};
THREE.ParticleDOMMaterial = function(a) {
	this.id = THREE.MaterialCounter.value++;
	this.domElement = a
};
THREE.ParticleDOMMaterial.prototype = {
	toString: function() {
		return "THREE.ParticleDOMMaterial ( domElement: " + this.domElement + " )"
	}
};
THREE.Texture = function(a, b, c, d, f, g) {
	this.image = a;
	this.mapping = b !== undefined ? b : new THREE.UVMapping;
	this.wrap_s = c !== undefined ? c : THREE.ClampToEdgeWrapping;
	this.wrap_t = d !== undefined ? d : THREE.ClampToEdgeWrapping;
	this.mag_filter = f !== undefined ? f : THREE.LinearFilter;
	this.min_filter = g !== undefined ? g : THREE.LinearMipMapLinearFilter;
	this.needsUpdate = !1
};
THREE.Texture.prototype = {
	clone: function() {
		return new THREE.Texture(this.image, this.mapping, this.wrap_s, this.wrap_t, this.mag_filter, this.min_filter)
	},
	toString: function() {
		return "THREE.Texture (<br/>image: " + this.image + "<br/>wrap_s: " + this.wrap_s + "<br/>wrap_t: " + this.wrap_t + "<br/>mag_filter: " + this.mag_filter + "<br/>min_filter: " + this.min_filter + "<br/>)"
	}
};
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.RenderTarget = function(a, b, c) {
	this.width = a;
	this.height = b;
	c = c || {};
	this.wrap_s = c.wrap_s !== undefined ? c.wrap_s : THREE.ClampToEdgeWrapping;
	this.wrap_t = c.wrap_t !== undefined ? c.wrap_t : THREE.ClampToEdgeWrapping;
	this.mag_filter = c.mag_filter !== undefined ? c.mag_filter : THREE.LinearFilter;
	this.min_filter = c.min_filter !== undefined ? c.min_filter : THREE.LinearMipMapLinearFilter;
	this.format = c.format !== undefined ? c.format : THREE.RGBFormat;
	this.type = c.type !== undefined ? c.type : THREE.UnsignedByteType
};
var Uniforms = {
	clone: function(a) {
		var b, c, d, f = {};
		for (b in a) {
			f[b] = {};
			for (c in a[b]) {
				d = a[b][c];
				f[b][c] = d instanceof THREE.Color || d instanceof THREE.Vector3 || d instanceof THREE.Texture ? d.clone() : d
			}
		}
		return f
	},
	merge: function(a) {
		var b, c, d, f = {};
		for (b = 0; b < a.length; b++) {
			d = this.clone(a[b]);
			for (c in d) f[c] = d[c]
		}
		return f
	}
};
THREE.CubeReflectionMapping = function() {};
THREE.CubeRefractionMapping = function() {};
THREE.LatitudeReflectionMapping = function() {};
THREE.LatitudeRefractionMapping = function() {};
THREE.SphericalReflectionMapping = function() {};
THREE.SphericalRefractionMapping = function() {};
THREE.UVMapping = function() {};
THREE.Scene = function() {
	THREE.Object3D.call(this);
	this.objects = [];
	this.lights = [];
	this.fog = null
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.supr = THREE.Object3D.prototype;
THREE.Scene.prototype.addChild = function(a) {
	this.supr.addChild.call(this, a);
	this.addChildRecurse(a)
};
THREE.Scene.prototype.addChildRecurse = function(a) {
	if (a instanceof THREE.Light) this.lights.indexOf(a) === -1 && this.lights.push(a);
	else a instanceof THREE.Camera || a instanceof THREE.Bone || this.objects.indexOf(a) === -1 && this.objects.push(a);
	for (var b = 0; b < a.children.length; b++) this.addChildRecurse(a.children[b])
};
THREE.Scene.prototype.removeChild = function(a) {
	this.supr.removeChild.call(this, a);
	this.removeChildRecurse(a)
};
THREE.Scene.prototype.removeChildRecurse = function(a) {
	if (a instanceof THREE.Light) {
		var b = this.lights.indexOf(a);
		b !== -1 && this.lights.splice(b, 1)
	} else if (!(a instanceof THREE.Camera)) {
		b = this.objects.indexOf(a);
		b !== -1 && this.objects.splice(b, 1)
	}
	for (b = 0; b < a.children.length; b++) this.removeChildRecurse(a.children[b])
};
THREE.Scene.prototype.addObject = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeObject = THREE.Scene.prototype.removeChild;
THREE.Scene.prototype.addLight = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeLight = THREE.Scene.prototype.removeChild;
THREE.Fog = function(a, b, c) {
	this.color = new THREE.Color(a);
	this.near = b || 1;
	this.far = c || 1E3
};
THREE.FogExp2 = function(a, b) {
	this.color = new THREE.Color(a);
	this.density = b || 2.5E-4
};
THREE.Projector = function() {
	function a(L, M) {
		return M.z - L.z
	}

	function b(L, M) {
		var V = 0,
			S = 1,
			Y = L.z + L.w,
			Z = M.z + M.w,
			G = -L.z + L.w,
			U = -M.z + M.w;
		if (Y >= 0 && Z >= 0 && G >= 0 && U >= 0) return !0;
		else if (Y < 0 && Z < 0 || G < 0 && U < 0) return !1;
		else {
			if (Y < 0) V = Math.max(V, Y / (Y - Z));
			else Z < 0 && (S = Math.min(S, Y / (Y - Z))); if (G < 0) V = Math.max(V, G / (G - U));
			else U < 0 && (S = Math.min(S, G / (G - U))); if (S < V) return !1;
			else {
				L.lerpSelf(M, V);
				M.lerpSelf(L, 1 - S);
				return !0
			}
		}
	}
	var c, d, f = [],
		g, h, k, j = [],
		m, o, w = [],
		u, t, x = [],
		A = new THREE.Vector4,
		F = new THREE.Vector4,
		v = new THREE.Matrix4,
		I = new THREE.Matrix4,
		q = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
		J = new THREE.Vector4,
		e = new THREE.Vector4,
		aa;
	this.projectObjects = function(L, M, V) {
		M = [];
		var S, Y, Z;
		d = 0;
		Y = L.objects;
		L = 0;
		for (S = Y.length; L < S; L++) {
			Z = Y[L];
			var G;
			if (!(G = !Z.visible))
				if (G = Z instanceof THREE.Mesh) {
					a: {
						G = void 0;
						for (var U = Z.globalMatrix, na = -Z.geometry.boundingSphere.radius * Math.max(Z.scale.x, Math.max(Z.scale.y, Z.scale.z)), W = 0; W < 6; W++) {
							G = q[W].x * U.n14 + q[W].y * U.n24 + q[W].z * U.n34 + q[W].w;
							if (G <=
								na) {
								G = !1;
								break a
							}
						}
						G = !0
					}
					G = !G
				}
			if (!G) {
				c = f[d] = f[d] || new THREE.RenderableObject;
				A.copy(Z.position);
				v.multiplyVector3(A);
				c.object = Z;
				c.z = A.z;
				M.push(c);
				d++
			}
		}
		V && M.sort(a);
		return M
	};
	this.projectScene = function(L, M, V) {
		var S = [],
			Y = M.zNear,
			Z = M.zFar,
			G, U, na, W, ka, ha, da, ra, ya, l, z, B, p, n, C, H;
		k = o = t = 0;
		M.matrixAutoUpdate && M.update();
		v.multiply(M.projectionMatrix, M.globalMatrix);
		q[0].set(v.n41 - v.n11, v.n42 - v.n12, v.n43 - v.n13, v.n44 - v.n14);
		q[1].set(v.n41 + v.n11, v.n42 + v.n12, v.n43 + v.n13, v.n44 + v.n14);
		q[2].set(v.n41 + v.n21, v.n42 + v.n22,
			v.n43 + v.n23, v.n44 + v.n24);
		q[3].set(v.n41 - v.n21, v.n42 - v.n22, v.n43 - v.n23, v.n44 - v.n24);
		q[4].set(v.n41 - v.n31, v.n42 - v.n32, v.n43 - v.n33, v.n44 - v.n34);
		q[5].set(v.n41 + v.n31, v.n42 + v.n32, v.n43 + v.n33, v.n44 + v.n34);
		for (G = 0; G < 6; G++) {
			ha = q[G];
			ha.divideScalar(Math.sqrt(ha.x * ha.x + ha.y * ha.y + ha.z * ha.z))
		}
		L.update(undefined, !1, M);
		ha = this.projectObjects(L, M, !0);
		L = 0;
		for (G = ha.length; L < G; L++) {
			da = ha[L].object;
			if (da.visible) {
				da.matrixAutoUpdate && da.updateMatrix();
				ra = da.globalMatrix;
				ra.extractRotationMatrix(da.matrixRotation);
				z =
					da.matrixRotation;
				ya = da.materials;
				l = da.overdraw;
				if (da instanceof THREE.Mesh) {
					B = da.geometry;
					p = B.vertices;
					U = 0;
					for (na = p.length; U < na; U++) {
						n = p[U];
						n.positionWorld.copy(n.position);
						ra.multiplyVector3(n.positionWorld);
						W = n.positionScreen;
						W.copy(n.positionWorld);
						v.multiplyVector4(W);
						W.x /= W.w;
						W.y /= W.w;
						n.__visible = W.z > Y && W.z < Z
					}
					B = B.faces;
					U = 0;
					for (na = B.length; U < na; U++) {
						n = B[U];
						if (n instanceof THREE.Face3) {
							W = p[n.a];
							ka = p[n.b];
							C = p[n.c];
							if (W.__visible && ka.__visible && C.__visible && (da.doubleSided || da.flipSided != (C.positionScreen.x -
								W.positionScreen.x) * (ka.positionScreen.y - W.positionScreen.y) - (C.positionScreen.y - W.positionScreen.y) * (ka.positionScreen.x - W.positionScreen.x) < 0)) {
								g = j[k] = j[k] || new THREE.RenderableFace3;
								g.v1.positionWorld.copy(W.positionWorld);
								g.v2.positionWorld.copy(ka.positionWorld);
								g.v3.positionWorld.copy(C.positionWorld);
								g.v1.positionScreen.copy(W.positionScreen);
								g.v2.positionScreen.copy(ka.positionScreen);
								g.v3.positionScreen.copy(C.positionScreen);
								g.normalWorld.copy(n.normal);
								z.multiplyVector3(g.normalWorld);
								g.centroidWorld.copy(n.centroid);
								ra.multiplyVector3(g.centroidWorld);
								g.centroidScreen.copy(g.centroidWorld);
								v.multiplyVector3(g.centroidScreen);
								C = n.vertexNormals;
								aa = g.vertexNormalsWorld;
								W = 0;
								for (ka = C.length; W < ka; W++) {
									H = aa[W] = aa[W] || new THREE.Vector3;
									H.copy(C[W]);
									z.multiplyVector3(H)
								}
								g.z = g.centroidScreen.z;
								g.meshMaterials = ya;
								g.faceMaterials = n.materials;
								g.overdraw = l;
								if (da.geometry.uvs[U]) {
									g.uvs[0] = da.geometry.uvs[U][0];
									g.uvs[1] = da.geometry.uvs[U][1];
									g.uvs[2] = da.geometry.uvs[U][2]
								}
								S.push(g);
								k++
							}
						} else if (n instanceof THREE.Face4) {
							W = p[n.a];
							ka = p[n.b];
							C = p[n.c];
							H = p[n.d];
							if (W.__visible && ka.__visible && C.__visible && H.__visible && (da.doubleSided || da.flipSided != ((H.positionScreen.x - W.positionScreen.x) * (ka.positionScreen.y - W.positionScreen.y) - (H.positionScreen.y - W.positionScreen.y) * (ka.positionScreen.x - W.positionScreen.x) < 0 || (ka.positionScreen.x - C.positionScreen.x) * (H.positionScreen.y - C.positionScreen.y) - (ka.positionScreen.y - C.positionScreen.y) * (H.positionScreen.x - C.positionScreen.x) < 0))) {
								g = j[k] = j[k] || new THREE.RenderableFace3;
								g.v1.positionWorld.copy(W.positionWorld);
								g.v2.positionWorld.copy(ka.positionWorld);
								g.v3.positionWorld.copy(H.positionWorld);
								g.v1.positionScreen.copy(W.positionScreen);
								g.v2.positionScreen.copy(ka.positionScreen);
								g.v3.positionScreen.copy(H.positionScreen);
								g.normalWorld.copy(n.normal);
								z.multiplyVector3(g.normalWorld);
								g.centroidWorld.copy(n.centroid);
								ra.multiplyVector3(g.centroidWorld);
								g.centroidScreen.copy(g.centroidWorld);
								v.multiplyVector3(g.centroidScreen);
								g.z = g.centroidScreen.z;
								g.meshMaterials = ya;
								g.faceMaterials = n.materials;
								g.overdraw = l;
								if (da.geometry.uvs[U]) {
									g.uvs[0] = da.geometry.uvs[U][0];
									g.uvs[1] = da.geometry.uvs[U][1];
									g.uvs[2] = da.geometry.uvs[U][3]
								}
								S.push(g);
								k++;
								h = j[k] = j[k] || new THREE.RenderableFace3;
								h.v1.positionWorld.copy(ka.positionWorld);
								h.v2.positionWorld.copy(C.positionWorld);
								h.v3.positionWorld.copy(H.positionWorld);
								h.v1.positionScreen.copy(ka.positionScreen);
								h.v2.positionScreen.copy(C.positionScreen);
								h.v3.positionScreen.copy(H.positionScreen);
								h.normalWorld.copy(g.normalWorld);
								h.centroidWorld.copy(g.centroidWorld);
								h.centroidScreen.copy(g.centroidScreen);
								h.z = h.centroidScreen.z;
								h.meshMaterials = ya;
								h.faceMaterials = n.materials;
								h.overdraw = l;
								if (da.geometry.uvs[U]) {
									h.uvs[0] = da.geometry.uvs[U][1];
									h.uvs[1] = da.geometry.uvs[U][2];
									h.uvs[2] = da.geometry.uvs[U][3]
								}
								S.push(h);
								k++
							}
						}
					}
				} else if (da instanceof THREE.Line) {
					I.multiply(v, ra);
					p = da.geometry.vertices;
					n = p[0];
					n.positionScreen.copy(n.position);
					I.multiplyVector4(n.positionScreen);
					U = 1;
					for (na = p.length; U < na; U++) {
						W = p[U];
						W.positionScreen.copy(W.position);
						I.multiplyVector4(W.positionScreen);
						ka = p[U - 1];
						J.copy(W.positionScreen);
						e.copy(ka.positionScreen);
						if (b(J, e)) {
							J.multiplyScalar(1 / J.w);
							e.multiplyScalar(1 / e.w);
							m = w[o] = w[o] || new THREE.RenderableLine;
							m.v1.positionScreen.copy(J);
							m.v2.positionScreen.copy(e);
							m.z = Math.max(J.z, e.z);
							m.materials = da.materials;
							S.push(m);
							o++
						}
					}
				} else if (da instanceof THREE.Particle) {
					F.set(da.position.x, da.position.y, da.position.z, 1);
					v.multiplyVector4(F);
					F.z /= F.w;
					if (F.z > 0 && F.z < 1) {
						u = x[t] = x[t] || new THREE.RenderableParticle;
						u.x = F.x / F.w;
						u.y = F.y / F.w;
						u.z = F.z;
						u.rotation = da.rotation.z;
						u.scale.x = da.scale.x * Math.abs(u.x - (F.x + M.projectionMatrix.n11) / (F.w + M.projectionMatrix.n14));
						u.scale.y = da.scale.y * Math.abs(u.y - (F.y + M.projectionMatrix.n22) / (F.w + M.projectionMatrix.n24));
						u.materials = da.materials;
						S.push(u);
						t++
					}
				}
			}
		}
		V && S.sort(a);
		return S
	};
	this.unprojectVector = function(L, M) {
		var V = THREE.Matrix4.makeInvert(M.globalMatrix);
		V.multiplySelf(THREE.Matrix4.makeInvert(M.projectionMatrix));
		V.multiplyVector3(L);
		return L
	}
};
THREE.DOMRenderer = function() {
	THREE.Renderer.call(this);
	var a = null,
		b = new THREE.Projector,
		c, d, f, g;
	this.domElement = document.createElement("div");
	this.setSize = function(h, k) {
		c = h;
		d = k;
		f = c / 2;
		g = d / 2
	};
	this.render = function(h, k) {
		var j, m, o, w, u, t, x, A;
		a = b.projectScene(h, k);
		j = 0;
		for (m = a.length; j < m; j++) {
			u = a[j];
			if (u instanceof THREE.RenderableParticle) {
				x = u.x * f + f;
				A = u.y * g + g;
				o = 0;
				for (w = u.material.length; o < w; o++) {
					t = u.material[o];
					if (t instanceof THREE.ParticleDOMMaterial) {
						t = t.domElement;
						t.style.left = x + "px";
						t.style.top = A + "px"
					}
				}
			}
		}
	}
};
THREE.CanvasRenderer = function() {
	function a(sa) {
		if (u != sa) m.globalAlpha = u = sa
	}

	function b(sa) {
		if (t != sa) {
			switch (sa) {
				case THREE.NormalBlending:
					m.globalCompositeOperation = "source-over";
					break;
				case THREE.AdditiveBlending:
					m.globalCompositeOperation = "lighter";
					break;
				case THREE.SubtractiveBlending:
					m.globalCompositeOperation = "darker"
			}
			t = sa
		}
	}
	var c = null,
		d = new THREE.Projector,
		f = document.createElement("canvas"),
		g, h, k, j, m = f.getContext("2d"),
		o = new THREE.Color(0),
		w = 0,
		u = 1,
		t = 0,
		x = null,
		A = null,
		F = 1,
		v, I, q, J, e, aa, L, M, V, S = new THREE.Color,
		Y = new THREE.Color,
		Z = new THREE.Color,
		G = new THREE.Color,
		U = new THREE.Color,
		na, W, ka, ha, da, ra, ya, l, z, B = new THREE.Rectangle,
		p = new THREE.Rectangle,
		n = new THREE.Rectangle,
		C = !1,
		H = new THREE.Color,
		N = new THREE.Color,
		ba = new THREE.Color,
		y = new THREE.Color,
		E = Math.PI * 2,
		D = new THREE.Vector3,
		P, T, oa, la, ja, ma, pa = 16;
	P = document.createElement("canvas");
	P.width = P.height = 2;
	T = P.getContext("2d");
	T.fillStyle = "rgba(0,0,0,1)";
	T.fillRect(0, 0, 2, 2);
	oa = T.getImageData(0, 0, 2, 2);
	la = oa.data;
	ja = document.createElement("canvas");
	ja.width = ja.height =
		pa;
	ma = ja.getContext("2d");
	ma.translate(-pa / 2, -pa / 2);
	ma.scale(pa, pa);
	pa--;
	this.domElement = f;
	this.autoClear = !0;
	this.sortObjects = !0;
	this.sortElements = !0;
	this.setSize = function(sa, O) {
		g = sa;
		h = O;
		k = g / 2;
		j = h / 2;
		f.width = g;
		f.height = h;
		B.set(-k, -j, k, j);
		u = 1;
		t = 0;
		A = x = null;
		F = 1
	};
	this.setClearColor = function(sa, O) {
		o = sa;
		w = O;
		p.set(-k, -j, k, j);
		m.setTransform(1, 0, 0, -1, k, j);
		this.clear()
	};
	this.setClearColorHex = function(sa, O) {
		o.setHex(sa);
		w = O;
		p.set(-k, -j, k, j);
		m.setTransform(1, 0, 0, -1, k, j);
		this.clear()
	};
	this.clear = function() {
		m.setTransform(1,
			0, 0, -1, k, j);
		if (!p.isEmpty()) {
			p.inflate(1);
			p.minSelf(B);
			if (o.hex == 0 && w == 0) m.clearRect(p.getX(), p.getY(), p.getWidth(), p.getHeight());
			else {
				b(THREE.NormalBlending);
				a(1);
				m.fillStyle = "rgba(" + Math.floor(o.r * 255) + "," + Math.floor(o.g * 255) + "," + Math.floor(o.b * 255) + "," + w + ")";
				m.fillRect(p.getX(), p.getY(), p.getWidth(), p.getHeight())
			}
			p.empty()
		}
	};
	this.render = function(sa, O) {
		function Ia(Q) {
			var fa, ga, R, ea = Q.lights;
			N.setRGB(0, 0, 0);
			ba.setRGB(0, 0, 0);
			y.setRGB(0, 0, 0);
			Q = 0;
			for (fa = ea.length; Q < fa; Q++) {
				ga = ea[Q];
				R = ga.color;
				if (ga instanceof THREE.AmbientLight) {
					N.r += R.r;
					N.g += R.g;
					N.b += R.b
				} else if (ga instanceof THREE.DirectionalLight) {
					ba.r += R.r;
					ba.g += R.g;
					ba.b += R.b
				} else if (ga instanceof THREE.PointLight) {
					y.r += R.r;
					y.g += R.g;
					y.b += R.b
				}
			}
		}

		function Ca(Q, fa, ga, R) {
			var ea, qa, Aa, Ga, Ha = Q.lights;
			Q = 0;
			for (ea = Ha.length; Q < ea; Q++) {
				qa = Ha[Q];
				Aa = qa.color;
				Ga = qa.intensity;
				if (qa instanceof THREE.DirectionalLight) {
					qa = ga.dot(qa.position) * Ga;
					if (qa > 0) {
						R.r += Aa.r * qa;
						R.g += Aa.g * qa;
						R.b += Aa.b * qa
					}
				} else if (qa instanceof THREE.PointLight) {
					D.sub(qa.position, fa);
					D.normalize();
					qa = ga.dot(D) * Ga;
					if (qa > 0) {
						R.r += Aa.r * qa;
						R.g += Aa.g * qa;
						R.b += Aa.b * qa
					}
				}
			}
		}

		function Ja(Q, fa, ga) {
			if (ga.opacity != 0) {
				a(ga.opacity);
				b(ga.blending);
				var R, ea, qa, Aa, Ga, Ha;
				if (ga instanceof THREE.ParticleBasicMaterial) {
					if (ga.map) {
						Aa = ga.map.image;
						Ga = Aa.width >> 1;
						Ha = Aa.height >> 1;
						ea = fa.scale.x * k;
						qa = fa.scale.y * j;
						ga = ea * Ga;
						R = qa * Ha;
						n.set(Q.x - ga, Q.y - R, Q.x + ga, Q.y + R);
						if (B.instersects(n)) {
							m.save();
							m.translate(Q.x, Q.y);
							m.rotate(-fa.rotation);
							m.scale(ea, -qa);
							m.translate(-Ga, -Ha);
							m.drawImage(Aa, 0, 0);
							m.restore()
						}
					}
				} else if (ga instanceof THREE.ParticleCircleMaterial) {
					if (C) {
						H.r = N.r + ba.r + y.r;
						H.g = N.g + ba.g + y.g;
						H.b = N.b + ba.b + y.b;
						S.r = ga.color.r * H.r;
						S.g = ga.color.g * H.g;
						S.b = ga.color.b * H.b;
						S.updateStyleString()
					} else S.__styleString = ga.color.__styleString;
					ga = fa.scale.x * k;
					R = fa.scale.y * j;
					n.set(Q.x - ga, Q.y - R, Q.x + ga, Q.y + R);
					if (B.instersects(n)) {
						ea = S.__styleString;
						if (A != ea) m.fillStyle = A = ea;
						m.save();
						m.translate(Q.x, Q.y);
						m.rotate(-fa.rotation);
						m.scale(ga, R);
						m.beginPath();
						m.arc(0, 0, 1, 0, E, !0);
						m.closePath();
						m.fill();
						m.restore()
					}
				}
			}
		}

		function ca(Q, fa, ga, R) {
			if (R.opacity !=
				0) {
				a(R.opacity);
				b(R.blending);
				m.beginPath();
				m.moveTo(Q.positionScreen.x, Q.positionScreen.y);
				m.lineTo(fa.positionScreen.x, fa.positionScreen.y);
				m.closePath();
				if (R instanceof THREE.LineBasicMaterial) {
					S.__styleString = R.color.__styleString;
					Q = R.linewidth;
					if (F != Q) m.lineWidth = F = Q;
					Q = S.__styleString;
					if (x != Q) m.strokeStyle = x = Q;
					m.stroke();
					n.inflate(R.linewidth * 2)
				}
			}
		}

		function $(Q, fa, ga, R, ea, qa) {
			if (ea.opacity != 0) {
				a(ea.opacity);
				b(ea.blending);
				J = Q.positionScreen.x;
				e = Q.positionScreen.y;
				aa = fa.positionScreen.x;
				L = fa.positionScreen.y;
				M = ga.positionScreen.x;
				V = ga.positionScreen.y;
				m.beginPath();
				m.moveTo(J, e);
				m.lineTo(aa, L);
				m.lineTo(M, V);
				m.lineTo(J, e);
				m.closePath();
				if (ea instanceof THREE.MeshBasicMaterial)
					if (ea.map) ea.map.mapping instanceof THREE.UVMapping && Fa(J, e, aa, L, M, V, ea.map.image, R.uvs[0].u, R.uvs[0].v, R.uvs[1].u, R.uvs[1].v, R.uvs[2].u, R.uvs[2].v);
					else
				if (ea.env_map) {
					if (ea.env_map.mapping instanceof THREE.SphericalReflectionMapping) {
						Q = O.globalMatrix;
						D.copy(R.vertexNormalsWorld[0]);
						ha = (D.x * Q.n11 + D.y * Q.n12 + D.z * Q.n13) * 0.5 + 0.5;
						da = -(D.x * Q.n21 + D.y * Q.n22 + D.z * Q.n23) * 0.5 + 0.5;
						D.copy(R.vertexNormalsWorld[1]);
						ra = (D.x * Q.n11 + D.y * Q.n12 + D.z * Q.n13) * 0.5 + 0.5;
						ya = -(D.x * Q.n21 + D.y * Q.n22 + D.z * Q.n23) * 0.5 + 0.5;
						D.copy(R.vertexNormalsWorld[2]);
						l = (D.x * Q.n11 + D.y * Q.n12 + D.z * Q.n13) * 0.5 + 0.5;
						z = -(D.x * Q.n21 + D.y * Q.n22 + D.z * Q.n23) * 0.5 + 0.5;
						Fa(J, e, aa, L, M, V, ea.env_map.image, ha, da, ra, ya, l, z)
					}
				} else ea.wireframe ? X(ea.color.__styleString, ea.wireframe_linewidth) : ta(ea.color.__styleString);
				else if (ea instanceof THREE.MeshLambertMaterial) {
					if (ea.map && !ea.wireframe) {
						ea.map.mapping instanceof
						THREE.UVMapping && Fa(J, e, aa, L, M, V, ea.map.image, R.uvs[0].u, R.uvs[0].v, R.uvs[1].u, R.uvs[1].v, R.uvs[2].u, R.uvs[2].v);
						b(THREE.SubtractiveBlending)
					}
					if (C)
						if (!ea.wireframe && ea.shading == THREE.SmoothShading && R.vertexNormalsWorld.length == 3) {
							Y.r = Z.r = G.r = N.r;
							Y.g = Z.g = G.g = N.g;
							Y.b = Z.b = G.b = N.b;
							Ca(qa, R.v1.positionWorld, R.vertexNormalsWorld[0], Y);
							Ca(qa, R.v2.positionWorld, R.vertexNormalsWorld[1], Z);
							Ca(qa, R.v3.positionWorld, R.vertexNormalsWorld[2], G);
							U.r = (Z.r + G.r) * 0.5;
							U.g = (Z.g + G.g) * 0.5;
							U.b = (Z.b + G.b) * 0.5;
							ka = Da(Y, Z, G, U);
							Fa(J, e, aa, L, M, V, ka, 0, 0, 1, 0, 0, 1)
						} else {
							H.r = N.r;
							H.g = N.g;
							H.b = N.b;
							Ca(qa, R.centroidWorld, R.normalWorld, H);
							S.r = ea.color.r * H.r;
							S.g = ea.color.g * H.g;
							S.b = ea.color.b * H.b;
							S.updateStyleString();
							ea.wireframe ? X(S.__styleString, ea.wireframe_linewidth) : ta(S.__styleString)
						} else ea.wireframe ? X(ea.color.__styleString, ea.wireframe_linewidth) : ta(ea.color.__styleString)
				} else if (ea instanceof THREE.MeshDepthMaterial) {
					na = O.near;
					W = O.far;
					Y.r = Y.g = Y.b = 1 - K(Q.positionScreen.z, na, W);
					Z.r = Z.g = Z.b = 1 - K(fa.positionScreen.z, na, W);
					G.r = G.g =
						G.b = 1 - K(ga.positionScreen.z, na, W);
					U.r = (Z.r + G.r) * 0.5;
					U.g = (Z.g + G.g) * 0.5;
					U.b = (Z.b + G.b) * 0.5;
					ka = Da(Y, Z, G, U);
					Fa(J, e, aa, L, M, V, ka, 0, 0, 1, 0, 0, 1)
				} else if (ea instanceof THREE.MeshNormalMaterial) {
					S.r = Ea(R.normalWorld.x);
					S.g = Ea(R.normalWorld.y);
					S.b = Ea(R.normalWorld.z);
					S.updateStyleString();
					ea.wireframe ? X(S.__styleString, ea.wireframe_linewidth) : ta(S.__styleString)
				}
			}
		}

		function X(Q, fa) {
			if (x != Q) m.strokeStyle = x = Q;
			if (F != fa) m.lineWidth = F = fa;
			m.stroke();
			n.inflate(fa * 2)
		}

		function ta(Q) {
			if (A != Q) m.fillStyle = A = Q;
			m.fill()
		}

		function Fa(Q,
			fa, ga, R, ea, qa, Aa, Ga, Ha, La, Ba, Ma, Ta) {
			var Na, Oa;
			Na = Aa.width - 1;
			Oa = Aa.height - 1;
			Ga *= Na;
			Ha *= Oa;
			La *= Na;
			Ba *= Oa;
			Ma *= Na;
			Ta *= Oa;
			ga -= Q;
			R -= fa;
			ea -= Q;
			qa -= fa;
			La -= Ga;
			Ba -= Ha;
			Ma -= Ga;
			Ta -= Ha;
			Na = La * Ta - Ma * Ba;
			if (Na != 0) {
				Oa = 1 / Na;
				Na = (Ta * ga - Ba * ea) * Oa;
				Ba = (Ta * R - Ba * qa) * Oa;
				ga = (La * ea - Ma * ga) * Oa;
				R = (La * qa - Ma * R) * Oa;
				Q = Q - Na * Ga - ga * Ha;
				fa = fa - Ba * Ga - R * Ha;
				m.save();
				m.transform(Na, Ba, ga, R, Q, fa);
				m.clip();
				m.drawImage(Aa, 0, 0);
				m.restore()
			}
		}

		function Da(Q, fa, ga, R) {
			var ea = ~~ (Q.r * 255),
				qa = ~~ (Q.g * 255);
			Q = ~~ (Q.b * 255);
			var Aa = ~~ (fa.r * 255),
				Ga = ~~ (fa.g * 255);
			fa = ~~ (fa.b * 255);
			var Ha = ~~ (ga.r * 255),
				La = ~~ (ga.g * 255);
			ga = ~~ (ga.b * 255);
			var Ba = ~~ (R.r * 255),
				Ma = ~~ (R.g * 255);
			R = ~~ (R.b * 255);
			la[0] = ea < 0 ? 0 : ea > 255 ? 255 : ea;
			la[1] = qa < 0 ? 0 : qa > 255 ? 255 : qa;
			la[2] = Q < 0 ? 0 : Q > 255 ? 255 : Q;
			la[4] = Aa < 0 ? 0 : Aa > 255 ? 255 : Aa;
			la[5] = Ga < 0 ? 0 : Ga > 255 ? 255 : Ga;
			la[6] = fa < 0 ? 0 : fa > 255 ? 255 : fa;
			la[8] = Ha < 0 ? 0 : Ha > 255 ? 255 : Ha;
			la[9] = La < 0 ? 0 : La > 255 ? 255 : La;
			la[10] = ga < 0 ? 0 : ga > 255 ? 255 : ga;
			la[12] = Ba < 0 ? 0 : Ba > 255 ? 255 : Ba;
			la[13] = Ma < 0 ? 0 : Ma > 255 ? 255 : Ma;
			la[14] = R < 0 ? 0 : R > 255 ? 255 : R;
			T.putImageData(oa, 0, 0);
			ma.drawImage(P, 0, 0);
			return ja
		}

		function K(Q,
			fa, ga) {
			Q = (Q - fa) / (ga - fa);
			return Q * Q * (3 - 2 * Q)
		}

		function Ea(Q) {
			Q = (Q + 1) * 0.5;
			return Q < 0 ? 0 : Q > 1 ? 1 : Q
		}

		function Ra(Q, fa) {
			var ga = fa.x - Q.x,
				R = fa.y - Q.y,
				ea = 1 / Math.sqrt(ga * ga + R * R);
			ga *= ea;
			R *= ea;
			fa.x += ga;
			fa.y += R;
			Q.x -= ga;
			Q.y -= R
		}
		var Pa, Ka, ia, wa, ua, xa, za, va;
		this.autoClear ? this.clear() : m.setTransform(1, 0, 0, -1, k, j);
		c = d.projectScene(sa, O, this.sortElements);
		(C = sa.lights.length > 0) && Ia(sa);
		Pa = 0;
		for (Ka = c.length; Pa < Ka; Pa++) {
			ia = c[Pa];
			n.empty();
			if (ia instanceof THREE.RenderableParticle) {
				v = ia;
				v.x *= k;
				v.y *= j;
				wa = 0;
				for (ua = ia.materials.length; wa <
					ua; wa++) Ja(v, ia, ia.materials[wa], sa)
			} else if (ia instanceof THREE.RenderableLine) {
				v = ia.v1;
				I = ia.v2;
				v.positionScreen.x *= k;
				v.positionScreen.y *= j;
				I.positionScreen.x *= k;
				I.positionScreen.y *= j;
				n.addPoint(v.positionScreen.x, v.positionScreen.y);
				n.addPoint(I.positionScreen.x, I.positionScreen.y);
				if (B.instersects(n)) {
					wa = 0;
					for (ua = ia.materials.length; wa < ua;) ca(v, I, ia, ia.materials[wa++], sa)
				}
			} else if (ia instanceof THREE.RenderableFace3) {
				v = ia.v1;
				I = ia.v2;
				q = ia.v3;
				v.positionScreen.x *= k;
				v.positionScreen.y *= j;
				I.positionScreen.x *=
					k;
				I.positionScreen.y *= j;
				q.positionScreen.x *= k;
				q.positionScreen.y *= j;
				if (ia.overdraw) {
					Ra(v.positionScreen, I.positionScreen);
					Ra(I.positionScreen, q.positionScreen);
					Ra(q.positionScreen, v.positionScreen)
				}
				n.add3Points(v.positionScreen.x, v.positionScreen.y, I.positionScreen.x, I.positionScreen.y, q.positionScreen.x, q.positionScreen.y);
				if (B.instersects(n)) {
					wa = 0;
					for (ua = ia.meshMaterials.length; wa < ua;) {
						va = ia.meshMaterials[wa++];
						if (va instanceof THREE.MeshFaceMaterial) {
							xa = 0;
							for (za = ia.faceMaterials.length; xa < za;)(va =
								ia.faceMaterials[xa++]) && $(v, I, q, ia, va, sa)
						} else $(v, I, q, ia, va, sa)
					}
				}
			}
			p.addRectangle(n)
		}
		m.setTransform(1, 0, 0, 1, 0, 0)
	}
};
THREE.SVGRenderer = function() {
	function a(ha, da, ra) {
		var ya, l, z, B;
		ya = 0;
		for (l = ha.lights.length; ya < l; ya++) {
			z = ha.lights[ya];
			if (z instanceof THREE.DirectionalLight) {
				B = da.normalWorld.dot(z.position) * z.intensity;
				if (B > 0) {
					ra.r += z.color.r * B;
					ra.g += z.color.g * B;
					ra.b += z.color.b * B
				}
			} else if (z instanceof THREE.PointLight) {
				V.sub(z.position, da.centroidWorld);
				V.normalize();
				B = da.normalWorld.dot(V) * z.intensity;
				if (B > 0) {
					ra.r += z.color.r * B;
					ra.g += z.color.g * B;
					ra.b += z.color.b * B
				}
			}
		}
	}

	function b(ha, da, ra, ya, l, z) {
		G = d(U++);
		G.setAttribute("d",
			"M " + ha.positionScreen.x + " " + ha.positionScreen.y + " L " + da.positionScreen.x + " " + da.positionScreen.y + " L " + ra.positionScreen.x + "," + ra.positionScreen.y + "z");
		if (l instanceof THREE.MeshBasicMaterial) q.__styleString = l.color.__styleString;
		else if (l instanceof THREE.MeshLambertMaterial)
			if (I) {
				J.r = e.r;
				J.g = e.g;
				J.b = e.b;
				a(z, ya, J);
				q.r = l.color.r * J.r;
				q.g = l.color.g * J.g;
				q.b = l.color.b * J.b;
				q.updateStyleString()
			} else q.__styleString = l.color.__styleString;
			else
		if (l instanceof THREE.MeshDepthMaterial) {
			M = 1 - l.__2near / (l.__farPlusNear -
				ya.z * l.__farMinusNear);
			q.setRGB(M, M, M)
		} else l instanceof THREE.MeshNormalMaterial && q.setRGB(f(ya.normalWorld.x), f(ya.normalWorld.y), f(ya.normalWorld.z));
		l.wireframe ? G.setAttribute("style", "fill: none; stroke: " + q.__styleString + "; stroke-width: " + l.wireframe_linewidth + "; stroke-opacity: " + l.opacity + "; stroke-linecap: " + l.wireframe_linecap + "; stroke-linejoin: " + l.wireframe_linejoin) : G.setAttribute("style", "fill: " + q.__styleString + "; fill-opacity: " + l.opacity);
		k.appendChild(G)
	}

	function c(ha, da, ra, ya,
		l, z, B) {
		G = d(U++);
		G.setAttribute("d", "M " + ha.positionScreen.x + " " + ha.positionScreen.y + " L " + da.positionScreen.x + " " + da.positionScreen.y + " L " + ra.positionScreen.x + "," + ra.positionScreen.y + " L " + ya.positionScreen.x + "," + ya.positionScreen.y + "z");
		if (z instanceof THREE.MeshBasicMaterial) q.__styleString = z.color.__styleString;
		else if (z instanceof THREE.MeshLambertMaterial)
			if (I) {
				J.r = e.r;
				J.g = e.g;
				J.b = e.b;
				a(B, l, J);
				q.r = z.color.r * J.r;
				q.g = z.color.g * J.g;
				q.b = z.color.b * J.b;
				q.updateStyleString()
			} else q.__styleString = z.color.__styleString;
			else
		if (z instanceof THREE.MeshDepthMaterial) {
			M = 1 - z.__2near / (z.__farPlusNear - l.z * z.__farMinusNear);
			q.setRGB(M, M, M)
		} else z instanceof THREE.MeshNormalMaterial && q.setRGB(f(l.normalWorld.x), f(l.normalWorld.y), f(l.normalWorld.z));
		z.wireframe ? G.setAttribute("style", "fill: none; stroke: " + q.__styleString + "; stroke-width: " + z.wireframe_linewidth + "; stroke-opacity: " + z.opacity + "; stroke-linecap: " + z.wireframe_linecap + "; stroke-linejoin: " + z.wireframe_linejoin) : G.setAttribute("style", "fill: " + q.__styleString +
			"; fill-opacity: " + z.opacity);
		k.appendChild(G)
	}

	function d(ha) {
		if (S[ha] == null) {
			S[ha] = document.createElementNS("http://www.w3.org/2000/svg", "path");
			ka == 0 && S[ha].setAttribute("shape-rendering", "crispEdges")
		}
		return S[ha]
	}

	function f(ha) {
		return ha < 0 ? Math.min((1 + ha) * 0.5, 0.5) : 0.5 + Math.min(ha * 0.5, 0.5)
	}
	var g = null,
		h = new THREE.Projector,
		k = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
		j, m, o, w, u, t, x, A, F = new THREE.Rectangle,
		v = new THREE.Rectangle,
		I = !1,
		q = new THREE.Color(16777215),
		J = new THREE.Color(16777215),
		e = new THREE.Color(0),
		aa = new THREE.Color(0),
		L = new THREE.Color(0),
		M, V = new THREE.Vector3,
		S = [],
		Y = [],
		Z = [],
		G, U, na, W, ka = 1;
	this.domElement = k;
	this.autoClear = !0;
	this.sortObjects = !0;
	this.sortElements = !0;
	this.setQuality = function(ha) {
		switch (ha) {
			case "high":
				ka = 1;
				break;
			case "low":
				ka = 0
		}
	};
	this.setSize = function(ha, da) {
		j = ha;
		m = da;
		o = j / 2;
		w = m / 2;
		k.setAttribute("viewBox", -o + " " + -w + " " + j + " " + m);
		k.setAttribute("width", j);
		k.setAttribute("height", m);
		F.set(-o, -w, o, w)
	};
	this.clear = function() {
		for (; k.childNodes.length > 0;) k.removeChild(k.childNodes[0])
	};
	this.render = function(ha, da) {
		var ra, ya, l, z, B, p, n, C;
		this.autoClear && this.clear();
		g = h.projectScene(ha, da, this.sortElements);
		W = na = U = 0;
		if (I = ha.lights.length > 0) {
			n = ha.lights;
			e.setRGB(0, 0, 0);
			aa.setRGB(0, 0, 0);
			L.setRGB(0, 0, 0);
			ra = 0;
			for (ya = n.length; ra < ya; ra++) {
				l = n[ra];
				z = l.color;
				if (l instanceof THREE.AmbientLight) {
					e.r += z.r;
					e.g += z.g;
					e.b += z.b
				} else if (l instanceof THREE.DirectionalLight) {
					aa.r += z.r;
					aa.g += z.g;
					aa.b += z.b
				} else if (l instanceof THREE.PointLight) {
					L.r += z.r;
					L.g += z.g;
					L.b += z.b
				}
			}
		}
		ra = 0;
		for (ya = g.length; ra < ya; ra++) {
			n =
				g[ra];
			v.empty();
			if (n instanceof THREE.RenderableParticle) {
				u = n;
				u.x *= o;
				u.y *= -w;
				l = 0;
				for (z = n.materials.length; l < z; l++)
					if (C = n.materials[l]) {
						B = u;
						p = n;
						var H = na++;
						if (Y[H] == null) {
							Y[H] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
							ka == 0 && Y[H].setAttribute("shape-rendering", "crispEdges")
						}
						G = Y[H];
						G.setAttribute("cx", B.x);
						G.setAttribute("cy", B.y);
						G.setAttribute("r", p.scale.x * o);
						if (C instanceof THREE.ParticleCircleMaterial) {
							if (I) {
								J.r = e.r + aa.r + L.r;
								J.g = e.g + aa.g + L.g;
								J.b = e.b + aa.b + L.b;
								q.r = C.color.r *
									J.r;
								q.g = C.color.g * J.g;
								q.b = C.color.b * J.b;
								q.updateStyleString()
							} else q = C.color;
							G.setAttribute("style", "fill: " + q.__styleString)
						}
						k.appendChild(G)
					}
			} else if (n instanceof THREE.RenderableLine) {
				u = n.v1;
				t = n.v2;
				u.positionScreen.x *= o;
				u.positionScreen.y *= -w;
				t.positionScreen.x *= o;
				t.positionScreen.y *= -w;
				v.addPoint(u.positionScreen.x, u.positionScreen.y);
				v.addPoint(t.positionScreen.x, t.positionScreen.y);
				if (F.instersects(v)) {
					l = 0;
					for (z = n.materials.length; l < z;)
						if (C = n.materials[l++]) {
							B = u;
							p = t;
							H = W++;
							if (Z[H] == null) {
								Z[H] =
									document.createElementNS("http://www.w3.org/2000/svg", "line");
								ka == 0 && Z[H].setAttribute("shape-rendering", "crispEdges")
							}
							G = Z[H];
							G.setAttribute("x1", B.positionScreen.x);
							G.setAttribute("y1", B.positionScreen.y);
							G.setAttribute("x2", p.positionScreen.x);
							G.setAttribute("y2", p.positionScreen.y);
							if (C instanceof THREE.LineBasicMaterial) {
								q.__styleString = C.color.__styleString;
								G.setAttribute("style", "fill: none; stroke: " + q.__styleString + "; stroke-width: " + C.linewidth + "; stroke-opacity: " + C.opacity + "; stroke-linecap: " +
									C.linecap + "; stroke-linejoin: " + C.linejoin);
								k.appendChild(G)
							}
						}
				}
			} else if (n instanceof THREE.RenderableFace3) {
				u = n.v1;
				t = n.v2;
				x = n.v3;
				u.positionScreen.x *= o;
				u.positionScreen.y *= -w;
				t.positionScreen.x *= o;
				t.positionScreen.y *= -w;
				x.positionScreen.x *= o;
				x.positionScreen.y *= -w;
				v.addPoint(u.positionScreen.x, u.positionScreen.y);
				v.addPoint(t.positionScreen.x, t.positionScreen.y);
				v.addPoint(x.positionScreen.x, x.positionScreen.y);
				if (F.instersects(v)) {
					l = 0;
					for (z = n.meshMaterials.length; l < z;) {
						C = n.meshMaterials[l++];
						if (C instanceof THREE.MeshFaceMaterial) {
							B = 0;
							for (p = n.faceMaterials.length; B < p;)(C = n.faceMaterials[B++]) && b(u, t, x, n, C, ha)
						} else C && b(u, t, x, n, C, ha)
					}
				}
			} else if (n instanceof THREE.RenderableFace4) {
				u = n.v1;
				t = n.v2;
				x = n.v3;
				A = n.v4;
				u.positionScreen.x *= o;
				u.positionScreen.y *= -w;
				t.positionScreen.x *= o;
				t.positionScreen.y *= -w;
				x.positionScreen.x *= o;
				x.positionScreen.y *= -w;
				A.positionScreen.x *= o;
				A.positionScreen.y *= -w;
				v.addPoint(u.positionScreen.x, u.positionScreen.y);
				v.addPoint(t.positionScreen.x, t.positionScreen.y);
				v.addPoint(x.positionScreen.x,
					x.positionScreen.y);
				v.addPoint(A.positionScreen.x, A.positionScreen.y);
				if (F.instersects(v)) {
					l = 0;
					for (z = n.meshMaterials.length; l < z;) {
						C = n.meshMaterials[l++];
						if (C instanceof THREE.MeshFaceMaterial) {
							B = 0;
							for (p = n.faceMaterials.length; B < p;)(C = n.faceMaterials[B++]) && c(u, t, x, A, n, C, ha)
						} else C && c(u, t, x, A, n, C, ha)
					}
				}
			}
		}
	}
};
THREE.WebGLRenderer = function(a) {
	function b(l, z, B) {
		var p, n, C, H = l.vertices,
			N = H.length,
			ba = l.colors,
			y = ba.length,
			E = l.__vertexArray,
			D = l.__colorArray,
			P = l.__sortArray,
			T = l.__dirtyVertices,
			oa = l.__dirtyColors;
		if (B.sortParticles) {
			U.multiplySelf(B.globalMatrix);
			for (p = 0; p < N; p++) {
				n = H[p].position;
				ha.copy(n);
				U.multiplyVector3(ha);
				P[p] = [ha.z, p]
			}
			P.sort(function(la, ja) {
				return ja[0] - la[0]
			});
			for (p = 0; p < N; p++) {
				n = H[P[p][1]].position;
				C = p * 3;
				E[C] = n.x;
				E[C + 1] = n.y;
				E[C + 2] = n.z
			}
			for (p = 0; p < y; p++) {
				C = p * 3;
				color = ba[P[p][1]];
				D[C] = color.r;
				D[C + 1] = color.g;
				D[C + 2] = color.b
			}
		} else {
			if (T)
				for (p = 0; p < N; p++) {
					n = H[p].position;
					C = p * 3;
					E[C] = n.x;
					E[C + 1] = n.y;
					E[C + 2] = n.z
				}
			if (oa)
				for (p = 0; p < y; p++) {
					color = ba[p];
					C = p * 3;
					D[C] = color.r;
					D[C + 1] = color.g;
					D[C + 2] = color.b
				}
		} if (T || B.sortParticles) {
			e.bindBuffer(e.ARRAY_BUFFER, l.__webGLVertexBuffer);
			e.bufferData(e.ARRAY_BUFFER, E, z)
		}
		if (oa || B.sortParticles) {
			e.bindBuffer(e.ARRAY_BUFFER, l.__webGLColorBuffer);
			e.bufferData(e.ARRAY_BUFFER, D, z)
		}
	}

	function c(l, z) {
		l.fragment_shader = z.fragment_shader;
		l.vertex_shader = z.vertex_shader;
		l.uniforms =
			Uniforms.clone(z.uniforms)
	}

	function d(l, z, B, p, n) {
		p.program || M.initMaterial(p, z, B);
		var C = p.program,
			H = C.uniforms,
			N = p.uniforms;
		if (C != aa) {
			e.useProgram(C);
			aa = C;
			e.uniformMatrix4fv(H.projectionMatrix, !1, na)
		}
		if (B && (p instanceof THREE.MeshBasicMaterial || p instanceof THREE.MeshLambertMaterial || p instanceof THREE.MeshPhongMaterial || p instanceof THREE.LineBasicMaterial || p instanceof THREE.ParticleBasicMaterial)) {
			N.fogColor.value.setHex(B.color.hex);
			if (B instanceof THREE.Fog) {
				N.fogNear.value = B.near;
				N.fogFar.value =
					B.far
			} else if (B instanceof THREE.FogExp2) N.fogDensity.value = B.density
		}
		if (p instanceof THREE.MeshPhongMaterial || p instanceof THREE.MeshLambertMaterial) {
			var ba, y, E = 0,
				D = 0,
				P = 0,
				T, oa, la, ja = M.lights,
				ma = ja.directional.colors,
				pa = ja.directional.positions,
				sa = ja.point.colors,
				O = ja.point.positions,
				Ia = 0,
				Ca = 0;
			B = y = y = 0;
			for (ba = z.length; B < ba; B++) {
				y = z[B];
				T = y.color;
				oa = y.position;
				la = y.intensity;
				if (y instanceof THREE.AmbientLight) {
					E += T.r;
					D += T.g;
					P += T.b
				} else if (y instanceof THREE.DirectionalLight) {
					y = Ia * 3;
					ma[y] = T.r * la;
					ma[y +
						1] = T.g * la;
					ma[y + 2] = T.b * la;
					pa[y] = oa.x;
					pa[y + 1] = oa.y;
					pa[y + 2] = oa.z;
					Ia += 1
				} else if (y instanceof THREE.PointLight) {
					y = Ca * 3;
					sa[y] = T.r * la;
					sa[y + 1] = T.g * la;
					sa[y + 2] = T.b * la;
					O[y] = oa.x;
					O[y + 1] = oa.y;
					O[y + 2] = oa.z;
					Ca += 1
				}
			}
			for (B = Ia * 3; B < ma.length; B++) ma[B] = 0;
			for (B = Ca * 3; B < sa.length; B++) sa[B] = 0;
			ja.point.length = Ca;
			ja.directional.length = Ia;
			ja.ambient[0] = E;
			ja.ambient[1] = D;
			ja.ambient[2] = P;
			z = M.lights;
			N.enableLighting.value = z.directional.length + z.point.length;
			N.ambientLightColor.value = z.ambient;
			N.directionalLightColor.value = z.directional.colors;
			N.directionalLightDirection.value = z.directional.positions;
			N.pointLightColor.value = z.point.colors;
			N.pointLightPosition.value = z.point.positions
		}
		if (p instanceof THREE.MeshBasicMaterial || p instanceof THREE.MeshLambertMaterial || p instanceof THREE.MeshPhongMaterial) {
			N.diffuse.value.setRGB(p.color.r * p.opacity, p.color.g * p.opacity, p.color.b * p.opacity);
			N.opacity.value = p.opacity;
			N.map.texture = p.map;
			N.light_map.texture = p.light_map;
			N.env_map.texture = p.env_map;
			N.reflectivity.value = p.reflectivity;
			N.refraction_ratio.value =
				p.refraction_ratio;
			N.combine.value = p.combine;
			N.useRefract.value = p.env_map && p.env_map.mapping instanceof THREE.CubeRefractionMapping
		}
		if (p instanceof THREE.LineBasicMaterial) {
			N.diffuse.value.setRGB(p.color.r * p.opacity, p.color.g * p.opacity, p.color.b * p.opacity);
			N.opacity.value = p.opacity
		} else if (p instanceof THREE.ParticleBasicMaterial) {
			N.psColor.value.setRGB(p.color.r * p.opacity, p.color.g * p.opacity, p.color.b * p.opacity);
			N.opacity.value = p.opacity;
			N.size.value = p.size;
			N.map.texture = p.map
		} else if (p instanceof THREE.MeshPhongMaterial) {
			N.ambient.value.setRGB(p.ambient.r, p.ambient.g, p.ambient.b);
			N.specular.value.setRGB(p.specular.r, p.specular.g, p.specular.b);
			N.shininess.value = p.shininess
		} else if (p instanceof THREE.MeshDepthMaterial) {
			N.mNear.value = l.zNear;
			N.mFar.value = l.zFar;
			N.opacity.value = p.opacity
		} else if (p instanceof THREE.MeshNormalMaterial) N.opacity.value = p.opacity;
		for (var Ja in N)
			if (E = C.uniforms[Ja]) {
				B = N[Ja];
				ba = B.type;
				z = B.value;
				if (ba == "i") e.uniform1i(E, z);
				else if (ba == "f") e.uniform1f(E, z);
				else if (ba ==
					"fv1") e.uniform1fv(E, z);
				else if (ba == "fv") e.uniform3fv(E, z);
				else if (ba == "v2") e.uniform2f(E, z.x, z.y);
				else if (ba == "v3") e.uniform3f(E, z.x, z.y, z.z);
				else if (ba == "c") e.uniform3f(E, z.r, z.g, z.b);
				else if (ba == "t") {
					e.uniform1i(E, z);
					if (B = B.texture)
						if (B.image instanceof Array && B.image.length == 6) {
							if (B.image.length == 6) {
								if (B.needsUpdate) {
									if (!B.image.__webGLTextureCube) B.image.__webGLTextureCube = e.createTexture();
									e.bindTexture(e.TEXTURE_CUBE_MAP, B.image.__webGLTextureCube);
									e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_S,
										e.CLAMP_TO_EDGE);
									e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
									e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR);
									e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR);
									for (ba = 0; ba < 6; ++ba) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ba, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, B.image[ba]);
									e.generateMipmap(e.TEXTURE_CUBE_MAP);
									e.bindTexture(e.TEXTURE_CUBE_MAP, null);
									B.needsUpdate = !1
								}
								e.activeTexture(e.TEXTURE0 + z);
								e.bindTexture(e.TEXTURE_CUBE_MAP, B.image.__webGLTextureCube)
							}
						} else {
							if (B.needsUpdate) {
								if (B.__wasSetOnce) {
									e.bindTexture(e.TEXTURE_2D,
										B.__webGLTexture);
									e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, B.image);
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, q(B.wrap_s));
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, q(B.wrap_t));
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, q(B.mag_filter));
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, q(B.min_filter));
									e.generateMipmap(e.TEXTURE_2D);
									e.bindTexture(e.TEXTURE_2D, null)
								} else {
									B.__webGLTexture = e.createTexture();
									e.bindTexture(e.TEXTURE_2D, B.__webGLTexture);
									e.texImage2D(e.TEXTURE_2D,
										0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, B.image);
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, q(B.wrap_s));
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, q(B.wrap_t));
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, q(B.mag_filter));
									e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, q(B.min_filter));
									e.generateMipmap(e.TEXTURE_2D);
									e.bindTexture(e.TEXTURE_2D, null);
									B.__wasSetOnce = !0
								}
								B.needsUpdate = !1
							}
							e.activeTexture(e.TEXTURE0 + z);
							e.bindTexture(e.TEXTURE_2D, B.__webGLTexture)
						}
				}
			}
		e.uniformMatrix4fv(H.modelViewMatrix, !1, n._modelViewMatrixArray);
		e.uniformMatrix3fv(H.normalMatrix, !1, n._normalMatrixArray);
		(p instanceof THREE.MeshShaderMaterial || p instanceof THREE.MeshPhongMaterial || p.env_map) && e.uniform3f(H.cameraPosition, l.position.x, l.position.y, l.position.z);
		(p instanceof THREE.MeshShaderMaterial || p.env_map || p.skinning) && e.uniformMatrix4fv(H.objectMatrix, !1, n._objectMatrixArray);
		(p instanceof THREE.MeshPhongMaterial || p instanceof THREE.MeshLambertMaterial || p instanceof THREE.MeshShaderMaterial || p.skinning) && e.uniformMatrix4fv(H.viewMatrix, !1, ka);
		if (p.skinning) {
			e.uniformMatrix4fv(H.cameraInverseMatrix, !1, W);
			e.uniformMatrix4fv(H.boneGlobalMatrices, !1, n.boneMatrices)
		}
		return C
	}

	function f(l, z, B, p, n, C) {
		l = d(l, z, B, p, C).attributes;
		e.bindBuffer(e.ARRAY_BUFFER, n.__webGLVertexBuffer);
		e.vertexAttribPointer(l.position, 3, e.FLOAT, !1, 0, 0);
		if (l.color >= 0) {
			e.bindBuffer(e.ARRAY_BUFFER, n.__webGLColorBuffer);
			e.vertexAttribPointer(l.color, 3, e.FLOAT, !1, 0, 0)
		}
		if (l.normal >= 0) {
			e.bindBuffer(e.ARRAY_BUFFER, n.__webGLNormalBuffer);
			e.vertexAttribPointer(l.normal, 3,
				e.FLOAT, !1, 0, 0)
		}
		if (l.tangent >= 0) {
			e.bindBuffer(e.ARRAY_BUFFER, n.__webGLTangentBuffer);
			e.vertexAttribPointer(l.tangent, 4, e.FLOAT, !1, 0, 0)
		}
		if (l.uv >= 0)
			if (n.__webGLUVBuffer) {
				e.bindBuffer(e.ARRAY_BUFFER, n.__webGLUVBuffer);
				e.vertexAttribPointer(l.uv, 2, e.FLOAT, !1, 0, 0);
				e.enableVertexAttribArray(l.uv)
			} else e.disableVertexAttribArray(l.uv);
		if (l.uv2 >= 0)
			if (n.__webGLUV2Buffer) {
				e.bindBuffer(e.ARRAY_BUFFER, n.__webGLUV2Buffer);
				e.vertexAttribPointer(l.uv2, 2, e.FLOAT, !1, 0, 0);
				e.enableVertexAttribArray(l.uv2)
			} else e.disableVertexAttribArray(l.uv2);
		if (p.skinning && l.skinVertexA >= 0 && l.skinVertexB >= 0 && l.skinIndex >= 0 && l.skinWeight >= 0) {
			e.bindBuffer(e.ARRAY_BUFFER, n.__webGLSkinVertexABuffer);
			e.vertexAttribPointer(l.skinVertexA, 4, e.FLOAT, !1, 0, 0);
			e.bindBuffer(e.ARRAY_BUFFER, n.__webGLSkinVertexBBuffer);
			e.vertexAttribPointer(l.skinVertexB, 4, e.FLOAT, !1, 0, 0);
			e.bindBuffer(e.ARRAY_BUFFER, n.__webGLSkinIndicesBuffer);
			e.vertexAttribPointer(l.skinIndex, 4, e.FLOAT, !1, 0, 0);
			e.bindBuffer(e.ARRAY_BUFFER, n.__webGLSkinWeightsBuffer);
			e.vertexAttribPointer(l.skinWeight,
				4, e.FLOAT, !1, 0, 0)
		}
		if (C instanceof THREE.Mesh)
			if (p.wireframe) {
				e.lineWidth(p.wireframe_linewidth);
				e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.__webGLLineBuffer);
				e.drawElements(e.LINES, n.__webGLLineCount, e.UNSIGNED_SHORT, 0)
			} else {
				e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.__webGLFaceBuffer);
				e.drawElements(e.TRIANGLES, n.__webGLFaceCount, e.UNSIGNED_SHORT, 0)
			} else
		if (C instanceof THREE.Line) {
			C = C.type == THREE.LineStrip ? e.LINE_STRIP : e.LINES;
			e.lineWidth(p.linewidth);
			e.drawArrays(C, 0, n.__webGLLineCount)
		} else if (C instanceof THREE.ParticleSystem) e.drawArrays(e.POINTS, 0, n.__webGLParticleCount);
		else C instanceof THREE.Ribbon && e.drawArrays(e.TRIANGLE_STRIP, 0, n.__webGLVertexCount)
	}

	function g(l, z) {
		if (!l.__webGLVertexBuffer) l.__webGLVertexBuffer = e.createBuffer();
		if (!l.__webGLNormalBuffer) l.__webGLNormalBuffer = e.createBuffer();
		if (l.hasPos) {
			e.bindBuffer(e.ARRAY_BUFFER, l.__webGLVertexBuffer);
			e.bufferData(e.ARRAY_BUFFER, l.positionArray, e.DYNAMIC_DRAW);
			e.enableVertexAttribArray(z.attributes.position);
			e.vertexAttribPointer(z.attributes.position,
				3, e.FLOAT, !1, 0, 0)
		}
		if (l.hasNormal) {
			e.bindBuffer(e.ARRAY_BUFFER, l.__webGLNormalBuffer);
			e.bufferData(e.ARRAY_BUFFER, l.normalArray, e.DYNAMIC_DRAW);
			e.enableVertexAttribArray(z.attributes.normal);
			e.vertexAttribPointer(z.attributes.normal, 3, e.FLOAT, !1, 0, 0)
		}
		e.drawArrays(e.TRIANGLES, 0, l.count);
		l.count = 0
	}

	function h(l) {
		if (V != l.doubleSided) {
			l.doubleSided ? e.disable(e.CULL_FACE) : e.enable(e.CULL_FACE);
			V = l.doubleSided
		}
		if (S != l.flipSided) {
			l.flipSided ? e.frontFace(e.CW) : e.frontFace(e.CCW);
			S = l.flipSided
		}
	}

	function k(l) {
		if (Z !=
			l) {
			l ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST);
			Z = l
		}
	}

	function j(l) {
		G[0].set(l.n41 - l.n11, l.n42 - l.n12, l.n43 - l.n13, l.n44 - l.n14);
		G[1].set(l.n41 + l.n11, l.n42 + l.n12, l.n43 + l.n13, l.n44 + l.n14);
		G[2].set(l.n41 + l.n21, l.n42 + l.n22, l.n43 + l.n23, l.n44 + l.n24);
		G[3].set(l.n41 - l.n21, l.n42 - l.n22, l.n43 - l.n23, l.n44 - l.n24);
		G[4].set(l.n41 - l.n31, l.n42 - l.n32, l.n43 - l.n33, l.n44 - l.n34);
		G[5].set(l.n41 + l.n31, l.n42 + l.n32, l.n43 + l.n33, l.n44 + l.n34);
		var z;
		for (l = 0; l < 6; l++) {
			z = G[l];
			z.divideScalar(Math.sqrt(z.x * z.x + z.y * z.y + z.z * z.z))
		}
	}

	function m(l) {
		for (var z = l.globalMatrix, B = -l.geometry.boundingSphere.radius * Math.max(l.scale.x, Math.max(l.scale.y, l.scale.z)), p = 0; p < 6; p++) {
			l = G[p].x * z.n14 + G[p].y * z.n24 + G[p].z * z.n34 + G[p].w;
			if (l <= B) return !1
		}
		return !0
	}

	function o(l, z) {
		l.list[l.count] = z;
		l.count += 1
	}

	function w(l) {
		var z, B, p = l.object,
			n = l.opaque,
			C = l.transparent;
		C.count = 0;
		l = n.count = 0;
		for (z = p.materials.length; l < z; l++) {
			B = p.materials[l];
			B.opacity && B.opacity < 1 || B.blending != THREE.NormalBlending ? o(C, B) : o(n, B)
		}
	}

	function u(l) {
		var z, B, p, n, C = l.object,
			H =
				l.buffer,
			N = l.opaque,
			ba = l.transparent;
		ba.count = 0;
		l = N.count = 0;
		for (p = C.materials.length; l < p; l++) {
			z = C.materials[l];
			if (z instanceof THREE.MeshFaceMaterial) {
				z = 0;
				for (B = H.materials.length; z < B; z++)(n = H.materials[z]) && (n.opacity && n.opacity < 1 || n.blending != THREE.NormalBlending ? o(ba, n) : o(N, n))
			} else {
				n = z;
				n.opacity && n.opacity < 1 || n.blending != THREE.NormalBlending ? o(ba, n) : o(N, n)
			}
		}
	}

	function t(l, z) {
		return z.z - l.z
	}

	function x(l, z, B, p, n) {
		if (z[B] == undefined) {
			l.push({
				buffer: p,
				object: n,
				opaque: {
					list: [],
					count: 0
				},
				transparent: {
					list: [],
					count: 0
				}
			});
			z[B] = 1
		}
	}

	function A(l, z) {
		l._modelViewMatrix.multiplyToArray(z.globalMatrix, l.globalMatrix, l._modelViewMatrixArray);
		THREE.Matrix4.makeInvert3x3(l._modelViewMatrix).transposeIntoArray(l._normalMatrixArray)
	}

	function F(l) {
		if (l != Y) {
			switch (l) {
				case THREE.AdditiveBlending:
					e.blendEquation(e.FUNC_ADD);
					e.blendFunc(e.ONE, e.ONE);
					break;
				case THREE.SubtractiveBlending:
					e.blendFunc(e.DST_COLOR, e.ZERO);
					break;
				case THREE.BillboardBlending:
					e.blendEquation(e.FUNC_ADD);
					e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
					break;
				case THREE.ReverseSubtractiveBlending:
					e.blendEquation(e.FUNC_REVERSE_SUBTRACT);
					e.blendFunc(e.ONE, e.ONE);
					break;
				default:
					e.blendEquation(e.FUNC_ADD);
					e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA)
			}
			Y = l
		}
	}

	function v(l, z) {
		if (l && !l.__webGLFramebuffer) {
			l.__webGLFramebuffer = e.createFramebuffer();
			l.__webGLRenderbuffer = e.createRenderbuffer();
			l.__webGLTexture = e.createTexture();
			e.bindRenderbuffer(e.RENDERBUFFER, l.__webGLRenderbuffer);
			e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, l.width, l.height);
			e.bindTexture(e.TEXTURE_2D,
				l.__webGLTexture);
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, q(l.wrap_s));
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, q(l.wrap_t));
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, q(l.mag_filter));
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, q(l.min_filter));
			e.texImage2D(e.TEXTURE_2D, 0, q(l.format), l.width, l.height, 0, q(l.format), q(l.type), null);
			e.bindFramebuffer(e.FRAMEBUFFER, l.__webGLFramebuffer);
			e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, l.__webGLTexture, 0);
			e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, l.__webGLRenderbuffer);
			e.bindTexture(e.TEXTURE_2D, null);
			e.bindRenderbuffer(e.RENDERBUFFER, null);
			e.bindFramebuffer(e.FRAMEBUFFER, null)
		}
		var B, p, n;
		if (l) {
			B = l.__webGLFramebuffer;
			p = l.width;
			n = l.height
		} else {
			B = null;
			p = J.width;
			n = J.height
		} if (B != L) {
			e.bindFramebuffer(e.FRAMEBUFFER, B);
			e.viewport(0, 0, p, n);
			z && e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
			L = B
		}
	}

	function I(l, z) {
		var B;
		if (l == "fragment") B = e.createShader(e.FRAGMENT_SHADER);
		else l ==
			"vertex" && (B = e.createShader(e.VERTEX_SHADER));
		e.shaderSource(B, z);
		e.compileShader(B);
		if (!e.getShaderParameter(B, e.COMPILE_STATUS)) {
			alert(e.getShaderInfoLog(B));
			return null
		}
		return B
	}

	function q(l) {
		switch (l) {
			case THREE.RepeatWrapping:
				return e.REPEAT;
			case THREE.ClampToEdgeWrapping:
				return e.CLAMP_TO_EDGE;
			case THREE.MirroredRepeatWrapping:
				return e.MIRRORED_REPEAT;
			case THREE.NearestFilter:
				return e.NEAREST;
			case THREE.NearestMipMapNearestFilter:
				return e.NEAREST_MIPMAP_NEAREST;
			case THREE.NearestMipMapLinearFilter:
				return e.NEAREST_MIPMAP_LINEAR;
			case THREE.LinearFilter:
				return e.LINEAR;
			case THREE.LinearMipMapNearestFilter:
				return e.LINEAR_MIPMAP_NEAREST;
			case THREE.LinearMipMapLinearFilter:
				return e.LINEAR_MIPMAP_LINEAR;
			case THREE.ByteType:
				return e.BYTE;
			case THREE.UnsignedByteType:
				return e.UNSIGNED_BYTE;
			case THREE.ShortType:
				return e.SHORT;
			case THREE.UnsignedShortType:
				return e.UNSIGNED_SHORT;
			case THREE.IntType:
				return e.INT;
			case THREE.UnsignedShortType:
				return e.UNSIGNED_INT;
			case THREE.FloatType:
				return e.FLOAT;
			case THREE.AlphaFormat:
				return e.ALPHA;
			case THREE.RGBFormat:
				return e.RGB;
			case THREE.RGBAFormat:
				return e.RGBA;
			case THREE.LuminanceFormat:
				return e.LUMINANCE;
			case THREE.LuminanceAlphaFormat:
				return e.LUMINANCE_ALPHA
		}
		return 0
	}
	var J = document.createElement("canvas"),
		e, aa = null,
		L = null,
		M = this,
		V = null,
		S = null,
		Y = null,
		Z = null,
		G = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4],
		U = new THREE.Matrix4,
		na = new Float32Array(16),
		W = new Float32Array(16),
		ka = new Float32Array(16),
		ha = new THREE.Vector4,
		da = !0,
		ra = new THREE.Color(0),
		ya = 0;
	if (a) {
		if (a.antialias !== undefined) da = a.antialias;
		a.clearColor !== undefined && ra.setHex(a.clearColor);
		if (a.clearAlpha !== undefined) ya = a.clearAlpha
	}
	this.domElement = J;
	this.autoClear = !0;
	this.sortObjects = !1;
	(function(l, z, B) {
		try {
			e = J.getContext("experimental-webgl", {
				antialias: l
			})
		} catch (p) {
			console.log(p)
		}
		if (!e) {
			alert("WebGL not supported");
			throw "cannot create webgl context";
		}
		e.clearColor(0, 0, 0, 1);
		e.clearDepth(1);
		e.enable(e.DEPTH_TEST);
		e.depthFunc(e.LEQUAL);
		e.frontFace(e.CCW);
		e.cullFace(e.BACK);
		e.enable(e.CULL_FACE);
		e.enable(e.BLEND);
		e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
		e.clearColor(z.r, z.g, z.b, B);
		_cullEnabled = !0
	})(da, ra, ya);
	this.context = e;
	this.lights = {
		ambient: [0, 0, 0],
		directional: {
			length: 0,
			colors: [],
			positions: []
		},
		point: {
			length: 0,
			colors: [],
			positions: []
		}
	};
	this.setSize = function(l, z) {
		J.width = l;
		J.height = z;
		e.viewport(0, 0, J.width, J.height)
	};
	this.setClearColorHex = function(l, z) {
		var B = new THREE.Color(l);
		e.clearColor(B.r, B.g, B.b, z)
	};
	this.setClearColor = function(l, z) {
		e.clearColor(l.r, l.g, l.b, z)
	};
	this.clear = function() {
		e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)
	};
	this.initMaterial = function(l, z, B) {
		var p, n;
		if (l instanceof THREE.MeshDepthMaterial) c(l, THREE.ShaderLib.depth);
		else if (l instanceof THREE.MeshNormalMaterial) c(l, THREE.ShaderLib.normal);
		else if (l instanceof THREE.MeshBasicMaterial) c(l, THREE.ShaderLib.basic);
		else if (l instanceof THREE.MeshLambertMaterial) c(l, THREE.ShaderLib.lambert);
		else if (l instanceof THREE.MeshPhongMaterial) c(l, THREE.ShaderLib.phong);
		else if (l instanceof THREE.LineBasicMaterial) c(l,
			THREE.ShaderLib.basic);
		else l instanceof THREE.ParticleBasicMaterial && c(l, THREE.ShaderLib.particle_basic);
		var C, H, N, ba;
		n = N = ba = 0;
		for (C = z.length; n < C; n++) {
			H = z[n];
			H instanceof THREE.DirectionalLight && N++;
			H instanceof THREE.PointLight && ba++
		}
		if (ba + N <= 4) z = N;
		else {
			z = Math.ceil(4 * N / (ba + N));
			ba = 4 - z
		}
		n = {
			directional: z,
			point: ba
		};
		ba = l.fragment_shader;
		z = l.vertex_shader;
		C = {
			fog: B,
			map: l.map,
			env_map: l.env_map,
			light_map: l.light_map,
			vertex_colors: l.vertex_colors,
			skinning: l.skinning,
			maxDirLights: n.directional,
			maxPointLights: n.point
		};
		B = e.createProgram();
		n = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + C.maxDirLights, "#define MAX_POINT_LIGHTS " + C.maxPointLights, C.fog ? "#define USE_FOG" : "", C.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", C.map ? "#define USE_MAP" : "", C.env_map ? "#define USE_ENVMAP" : "", C.light_map ? "#define USE_LIGHTMAP" : "", C.vertex_colors ? "#define USE_COLOR" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
		C = [e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0 ? "#define VERTEX_TEXTURES" :
			"", "#define MAX_DIR_LIGHTS " + C.maxDirLights, "#define MAX_POINT_LIGHTS " + C.maxPointLights, C.map ? "#define USE_MAP" : "", C.env_map ? "#define USE_ENVMAP" : "", C.light_map ? "#define USE_LIGHTMAP" : "", C.vertex_colors ? "#define USE_COLOR" : "", C.skinning ? "#define USE_SKINNING" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 color;\nattribute vec2 uv;\nattribute vec2 uv2;\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n"
		].join("\n");
		e.attachShader(B, I("fragment", n + ba));
		e.attachShader(B, I("vertex", C + z));
		e.linkProgram(B);
		e.getProgramParameter(B, e.LINK_STATUS) || alert("Could not initialise shaders\nVALIDATE_STATUS: " + e.getProgramParameter(B, e.VALIDATE_STATUS) + ", gl error [" + e.getError() + "]");
		B.uniforms = {};
		B.attributes = {};
		l.program = B;
		B = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition", "cameraInverseMatrix", "boneGlobalMatrices"];
		for (p in l.uniforms) B.push(p);
		p = l.program;
		ba = 0;
		for (z = B.length; ba <
			z; ba++) {
			n = B[ba];
			p.uniforms[n] = e.getUniformLocation(p, n)
		}
		p = l.program;
		B = ["position", "normal", "uv", "uv2", "tangent", "color", "skinVertexA", "skinVertexB", "skinIndex", "skinWeight"];
		ba = 0;
		for (z = B.length; ba < z; ba++) {
			n = B[ba];
			p.attributes[n] = e.getAttribLocation(p, n)
		}
		p = l.program.attributes;
		e.enableVertexAttribArray(p.position);
		p.color >= 0 && e.enableVertexAttribArray(p.color);
		p.normal >= 0 && e.enableVertexAttribArray(p.normal);
		p.tangent >= 0 && e.enableVertexAttribArray(p.tangent);
		if (l.skinning && p.skinVertexA >= 0 && p.skinVertexB >=
			0 && p.skinIndex >= 0 && p.skinWeight >= 0) {
			e.enableVertexAttribArray(p.skinVertexA);
			e.enableVertexAttribArray(p.skinVertexB);
			e.enableVertexAttribArray(p.skinIndex);
			e.enableVertexAttribArray(p.skinWeight)
		}
	};
	this.render = function(l, z, B, p) {
		var n, C, H, N, ba, y, E, D, P = l.lights,
			T = l.fog;
		z.matrixAutoUpdate && z.update();
		z.globalMatrix.flattenToArray(ka);
		z.projectionMatrix.flattenToArray(na);
		z.inverseMatrix.flattenToArray(W);
		U.multiply(z.projectionMatrix, z.globalMatrix);
		j(U);
		THREE.AnimationHandler && THREE.AnimationHandler.update();
		l.update(undefined, !1, z);
		this.initWebGLObjects(l, z);
		v(B, p !== undefined ? p : !0);
		this.autoClear && this.clear();
		ba = l.__webGLObjects.length;
		for (p = 0; p < ba; p++) {
			n = l.__webGLObjects[p];
			E = n.object;
			if (E.visible)
				if (!(E instanceof THREE.Mesh) || m(E)) {
					E.globalMatrix.flattenToArray(E._objectMatrixArray);
					A(E, z);
					u(n);
					n.render = !0;
					if (this.sortObjects) {
						ha.copy(E.position);
						U.multiplyVector3(ha);
						n.z = ha.z
					}
				} else n.render = !1;
				else n.render = !1
		}
		this.sortObjects && l.__webGLObjects.sort(t);
		y = l.__webGLObjectsImmediate.length;
		for (p = 0; p <
			y; p++) {
			n = l.__webGLObjectsImmediate[p];
			E = n.object;
			if (E.visible) {
				E.matrixAutoUpdate && E.globalMatrix.flattenToArray(E._objectMatrixArray);
				A(E, z);
				w(n)
			}
		}
		F(THREE.NormalBlending);
		for (p = 0; p < ba; p++) {
			n = l.__webGLObjects[p];
			if (n.render) {
				E = n.object;
				D = n.buffer;
				H = n.opaque;
				h(E);
				for (n = 0; n < H.count; n++) {
					N = H.list[n];
					k(N.depth_test);
					f(z, P, T, N, D, E)
				}
			}
		}
		for (p = 0; p < y; p++) {
			n = l.__webGLObjectsImmediate[p];
			E = n.object;
			if (E.visible) {
				H = n.opaque;
				h(E);
				for (n = 0; n < H.count; n++) {
					N = H.list[n];
					k(N.depth_test);
					C = d(z, P, T, N, E);
					E.render(function(oa) {
						g(oa,
							C)
					})
				}
			}
		}
		for (p = 0; p < ba; p++) {
			n = l.__webGLObjects[p];
			if (n.render) {
				E = n.object;
				D = n.buffer;
				H = n.transparent;
				h(E);
				for (n = 0; n < H.count; n++) {
					N = H.list[n];
					F(N.blending);
					k(N.depth_test);
					f(z, P, T, N, D, E)
				}
			}
		}
		for (p = 0; p < y; p++) {
			n = l.__webGLObjectsImmediate[p];
			E = n.object;
			if (E.visible) {
				H = n.transparent;
				h(E);
				for (n = 0; n < H.count; n++) {
					N = H.list[n];
					F(N.blending);
					k(N.depth_test);
					C = d(z, P, T, N, E);
					E.render(function(oa) {
						g(oa, C)
					})
				}
			}
		}
		if (B && B.min_filter !== THREE.NearestFilter && B.min_filter !== THREE.LinearFilter) {
			e.bindTexture(e.TEXTURE_2D, B.__webGLTexture);
			e.generateMipmap(e.TEXTURE_2D);
			e.bindTexture(e.TEXTURE_2D, null)
		}
	};
	this.initWebGLObjects = function(l) {
		var z, B, p;
		if (!l.__webGLObjects) {
			l.__webGLObjects = [];
			l.__webGLObjectsMap = {};
			l.__webGLObjectsImmediate = []
		}
		z = 0;
		for (B = l.objects.length; z < B; z++) {
			p = l.objects[z];
			var n = l,
				C = void 0,
				H = void 0,
				N = void 0,
				ba = void 0;
			H = p.geometry;
			if (n.__webGLObjectsMap[p.id] == undefined) {
				n.__webGLObjectsMap[p.id] = {};
				p._modelViewMatrix = new THREE.Matrix4;
				p._normalMatrixArray = new Float32Array(9);
				p._modelViewMatrixArray = new Float32Array(16);
				p._objectMatrixArray = new Float32Array(16);
				p.globalMatrix.flattenToArray(p._objectMatrixArray)
			}
			ba = n.__webGLObjectsMap[p.id];
			objlist = n.__webGLObjects;
			if (p instanceof THREE.Mesh) {
				for (C in H.geometryChunks) {
					N = H.geometryChunks[C];
					if (!N.__webGLVertexBuffer) {
						n = N;
						n.__webGLVertexBuffer = e.createBuffer();
						n.__webGLNormalBuffer = e.createBuffer();
						n.__webGLTangentBuffer = e.createBuffer();
						n.__webGLColorBuffer = e.createBuffer();
						n.__webGLUVBuffer = e.createBuffer();
						n.__webGLUV2Buffer = e.createBuffer();
						n.__webGLSkinVertexABuffer =
							e.createBuffer();
						n.__webGLSkinVertexBBuffer = e.createBuffer();
						n.__webGLSkinIndicesBuffer = e.createBuffer();
						n.__webGLSkinWeightsBuffer = e.createBuffer();
						n.__webGLFaceBuffer = e.createBuffer();
						n.__webGLLineBuffer = e.createBuffer();
						n = N;
						var y = p,
							E = void 0,
							D = void 0,
							P = 0,
							T = 0,
							oa = 0,
							la = y.geometry.faces,
							ja = n.faces;
						E = 0;
						for (D = ja.length; E < D; E++) {
							fi = ja[E];
							face = la[fi];
							if (face instanceof THREE.Face3) {
								P += 3;
								T += 1;
								oa += 3
							} else if (face instanceof THREE.Face4) {
								P += 4;
								T += 2;
								oa += 4
							}
						}
						n.__vertexArray = new Float32Array(P * 3);
						n.__normalArray =
							new Float32Array(P * 3);
						n.__tangentArray = new Float32Array(P * 4);
						n.__colorArray = new Float32Array(P * 3);
						n.__uvArray = new Float32Array(P * 2);
						n.__uv2Array = new Float32Array(P * 2);
						n.__skinVertexAArray = new Float32Array(P * 4);
						n.__skinVertexBArray = new Float32Array(P * 4);
						n.__skinIndexArray = new Float32Array(P * 4);
						n.__skinWeightArray = new Float32Array(P * 4);
						n.__faceArray = new Uint16Array(T * 3);
						n.__lineArray = new Uint16Array(oa * 2);
						D = E = n;
						P = void 0;
						la = void 0;
						var ma = void 0,
							pa = void 0;
						ma = void 0;
						ja = !1;
						P = 0;
						for (la = y.materials.length; P <
							la; P++) {
							ma = y.materials[P];
							if (ma instanceof THREE.MeshFaceMaterial) {
								ma = 0;
								for (pa = D.materials.length; ma < pa; ma++)
									if (D.materials[ma] && D.materials[ma].shading != undefined && D.materials[ma].shading == THREE.SmoothShading) {
										ja = !0;
										break
									}
							} else if (ma && ma.shading != undefined && ma.shading == THREE.SmoothShading) {
								ja = !0;
								break
							}
							if (ja) break
						}
						E.__needsSmoothNormals = ja;
						n.__webGLFaceCount = T * 3;
						n.__webGLLineCount = oa * 2;
						H.__dirtyVertices = !0;
						H.__dirtyElements = !0;
						H.__dirtyUvs = !0;
						H.__dirtyNormals = !0;
						H.__dirtyTangents = !0;
						H.__dirtyColors = !0
					}
					if (H.__dirtyVertices || H.__dirtyElements || H.__dirtyUvs || H.__dirtyNormals || H.__dirtyColors || H.__dirtyTangents) {
						n = N;
						T = e.DYNAMIC_DRAW;
						oa = void 0;
						E = void 0;
						var sa = void 0,
							O = void 0,
							Ia = void 0,
							Ca = void 0,
							Ja = void 0;
						sa = void 0;
						var ca = void 0,
							$ = void 0,
							X = void 0,
							ta = void 0;
						ca = void 0;
						$ = void 0;
						X = void 0;
						O = void 0;
						ca = void 0;
						$ = void 0;
						X = void 0;
						ta = void 0;
						ca = void 0;
						$ = void 0;
						X = void 0;
						ta = void 0;
						ca = void 0;
						$ = void 0;
						X = void 0;
						ta = void 0;
						ca = void 0;
						$ = void 0;
						X = void 0;
						ta = void 0;
						ca = void 0;
						$ = void 0;
						X = void 0;
						ta = void 0;
						O = void 0;
						Ca = void 0;
						Ia = void 0;
						Ja = void 0;
						var Fa = pa = ma = ja = la = P = y = D = 0,
							Da = 0,
							K = 0,
							Ea = n.__vertexArray,
							Ra = n.__uvArray,
							Pa = n.__uv2Array,
							Ka = n.__normalArray,
							ia = n.__tangentArray,
							wa = n.__colorArray,
							ua = n.__skinVertexAArray,
							xa = n.__skinVertexBArray,
							za = n.__skinIndexArray,
							va = n.__skinWeightArray,
							Q = n.__faceArray,
							fa = n.__lineArray,
							ga = n.__needsSmoothNormals,
							R = p.geometry,
							ea = R.__dirtyVertices,
							qa = R.__dirtyElements,
							Aa = R.__dirtyUvs,
							Ga = R.__dirtyNormals,
							Ha = R.__dirtyTangents,
							La = R.__dirtyColors,
							Ba = R.vertices,
							Ma = n.faces,
							Ta = R.faces,
							Na = R.uvs,
							Oa = R.uvs2,
							Qa = R.colors,
							Ua = R.skinVerticesA,
							Va = R.skinVerticesB,
							Wa = R.skinIndices,
							Sa = R.skinWeights;
						oa = 0;
						for (E = Ma.length; oa < E; oa++) {
							sa = Ma[oa];
							O = Ta[sa];
							Ja = Na[sa];
							sa = Oa[sa];
							Ia = O.vertexNormals;
							Ca = O.normal;
							if (O instanceof THREE.Face3) {
								if (ea) {
									ca = Ba[O.a].position;
									$ = Ba[O.b].position;
									X = Ba[O.c].position;
									Ea[y] = ca.x;
									Ea[y + 1] = ca.y;
									Ea[y + 2] = ca.z;
									Ea[y + 3] = $.x;
									Ea[y + 4] = $.y;
									Ea[y + 5] = $.z;
									Ea[y + 6] = X.x;
									Ea[y + 7] = X.y;
									Ea[y + 8] = X.z;
									y += 9
								}
								if (Sa.length) {
									ca = Sa[O.a];
									$ = Sa[O.b];
									X = Sa[O.c];
									va[K] = ca.x;
									va[K + 1] = ca.y;
									va[K + 2] = ca.z;
									va[K + 3] = ca.w;
									va[K + 4] = $.x;
									va[K + 5] = $.y;
									va[K + 6] = $.z;
									va[K + 7] = $.w;
									va[K + 8] = X.x;
									va[K + 9] = X.y;
									va[K + 10] = X.z;
									va[K + 11] = X.w;
									ca = Wa[O.a];
									$ = Wa[O.b];
									X = Wa[O.c];
									za[K] = ca.x;
									za[K + 1] = ca.y;
									za[K + 2] = ca.z;
									za[K + 3] = ca.w;
									za[K + 4] = $.x;
									za[K + 5] = $.y;
									za[K + 6] = $.z;
									za[K + 7] = $.w;
									za[K + 8] = X.x;
									za[K + 9] = X.y;
									za[K + 10] = X.z;
									za[K + 11] = X.w;
									ca = Ua[O.a];
									$ = Ua[O.b];
									X = Ua[O.c];
									ua[K] = ca.x;
									ua[K + 1] = ca.y;
									ua[K + 2] = ca.z;
									ua[K + 3] = 1;
									ua[K + 4] = $.x;
									ua[K + 5] = $.y;
									ua[K + 6] = $.z;
									ua[K + 7] = 1;
									ua[K + 8] = X.x;
									ua[K + 9] = X.y;
									ua[K + 10] = X.z;
									ua[K + 11] = 1;
									ca = Va[O.a];
									$ = Va[O.b];
									X = Va[O.c];
									xa[K] = ca.x;
									xa[K + 1] = ca.y;
									xa[K + 2] = ca.z;
									xa[K + 3] = 1;
									xa[K + 4] = $.x;
									xa[K + 5] = $.y;
									xa[K + 6] = $.z;
									xa[K + 7] = 1;
									xa[K + 8] = X.x;
									xa[K + 9] = X.y;
									xa[K + 10] = X.z;
									xa[K + 11] = 1;
									K += 12
								}
								if (La && Qa.length) {
									ca = Qa[O.a];
									$ = Qa[O.b];
									X = Qa[O.c];
									wa[Da] = ca.r;
									wa[Da + 1] = ca.g;
									wa[Da + 2] = ca.b;
									wa[Da + 3] = $.r;
									wa[Da + 4] = $.g;
									wa[Da + 5] = $.b;
									wa[Da + 6] = X.r;
									wa[Da + 7] = X.g;
									wa[Da + 8] = X.b;
									Da += 9
								}
								if (Ha && R.hasTangents) {
									ca = Ba[O.a].tangent;
									$ = Ba[O.b].tangent;
									X = Ba[O.c].tangent;
									ia[pa] = ca.x;
									ia[pa + 1] = ca.y;
									ia[pa + 2] = ca.z;
									ia[pa + 3] = ca.w;
									ia[pa + 4] = $.x;
									ia[pa + 5] = $.y;
									ia[pa + 6] = $.z;
									ia[pa + 7] = $.w;
									ia[pa + 8] = X.x;
									ia[pa + 9] = X.y;
									ia[pa + 10] =
										X.z;
									ia[pa + 11] = X.w;
									pa += 12
								}
								if (Ga)
									if (Ia.length == 3 && ga)
										for (O = 0; O < 3; O++) {
											Ca = Ia[O];
											Ka[ma] = Ca.x;
											Ka[ma + 1] = Ca.y;
											Ka[ma + 2] = Ca.z;
											ma += 3
										} else
											for (O = 0; O < 3; O++) {
												Ka[ma] = Ca.x;
												Ka[ma + 1] = Ca.y;
												Ka[ma + 2] = Ca.z;
												ma += 3
											}
									if (Aa && Ja)
										for (O = 0; O < 3; O++) {
											Ia = Ja[O];
											Ra[P] = Ia.u;
											Ra[P + 1] = Ia.v;
											P += 2
										}
									if (Aa && sa)
										for (O = 0; O < 3; O++) {
											Ja = sa[O];
											Pa[la] = Ja.u;
											Pa[la + 1] = Ja.v;
											la += 2
										}
									if (qa) {
										Q[ja] = D;
										Q[ja + 1] = D + 1;
										Q[ja + 2] = D + 2;
										ja += 3;
										fa[Fa] = D;
										fa[Fa + 1] = D + 1;
										fa[Fa + 2] = D;
										fa[Fa + 3] = D + 2;
										fa[Fa + 4] = D + 1;
										fa[Fa + 5] = D + 2;
										Fa += 6;
										D += 3
									}
							} else if (O instanceof THREE.Face4) {
								if (ea) {
									ca = Ba[O.a].position;
									$ = Ba[O.b].position;
									X = Ba[O.c].position;
									ta = Ba[O.d].position;
									Ea[y] = ca.x;
									Ea[y + 1] = ca.y;
									Ea[y + 2] = ca.z;
									Ea[y + 3] = $.x;
									Ea[y + 4] = $.y;
									Ea[y + 5] = $.z;
									Ea[y + 6] = X.x;
									Ea[y + 7] = X.y;
									Ea[y + 8] = X.z;
									Ea[y + 9] = ta.x;
									Ea[y + 10] = ta.y;
									Ea[y + 11] = ta.z;
									y += 12
								}
								if (Sa.length) {
									ca = Sa[O.a];
									$ = Sa[O.b];
									X = Sa[O.c];
									ta = Sa[O.d];
									va[K] = ca.x;
									va[K + 1] = ca.y;
									va[K + 2] = ca.z;
									va[K + 3] = ca.w;
									va[K + 4] = $.x;
									va[K + 5] = $.y;
									va[K + 6] = $.z;
									va[K + 7] = $.w;
									va[K + 8] = X.x;
									va[K + 9] = X.y;
									va[K + 10] = X.z;
									va[K + 11] = X.w;
									va[K + 12] = ta.x;
									va[K + 13] = ta.y;
									va[K + 14] = ta.z;
									va[K + 15] = ta.w;
									ca = Wa[O.a];
									$ = Wa[O.b];
									X = Wa[O.c];
									ta = Wa[O.d];
									za[K] = ca.x;
									za[K + 1] = ca.y;
									za[K + 2] = ca.z;
									za[K + 3] = ca.w;
									za[K + 4] = $.x;
									za[K + 5] = $.y;
									za[K + 6] = $.z;
									za[K + 7] = $.w;
									za[K + 8] = X.x;
									za[K + 9] = X.y;
									za[K + 10] = X.z;
									za[K + 11] = X.w;
									za[K + 12] = ta.x;
									za[K + 13] = ta.y;
									za[K + 14] = ta.z;
									za[K + 15] = ta.w;
									ca = Ua[O.a];
									$ = Ua[O.b];
									X = Ua[O.c];
									ta = Ua[O.d];
									ua[K] = ca.x;
									ua[K + 1] = ca.y;
									ua[K + 2] = ca.z;
									ua[K + 3] = 1;
									ua[K + 4] = $.x;
									ua[K + 5] = $.y;
									ua[K + 6] = $.z;
									ua[K + 7] = 1;
									ua[K + 8] = X.x;
									ua[K + 9] = X.y;
									ua[K + 10] = X.z;
									ua[K + 11] = 1;
									ua[K + 12] = ta.x;
									ua[K + 13] = ta.y;
									ua[K + 14] = ta.z;
									ua[K + 15] = 1;
									ca = Va[O.a];
									$ = Va[O.b];
									X = Va[O.c];
									ta = Va[O.d];
									xa[K] = ca.x;
									xa[K + 1] = ca.y;
									xa[K + 2] = ca.z;
									xa[K + 3] = 1;
									xa[K + 4] = $.x;
									xa[K + 5] = $.y;
									xa[K + 6] = $.z;
									xa[K + 7] = 1;
									xa[K + 8] = X.x;
									xa[K + 9] = X.y;
									xa[K + 10] = X.z;
									xa[K + 11] = 1;
									xa[K + 12] = ta.x;
									xa[K + 13] = ta.y;
									xa[K + 14] = ta.z;
									xa[K + 15] = 1;
									K += 16
								}
								if (La && Qa.length) {
									ca = Qa[O.a];
									$ = Qa[O.b];
									X = Qa[O.c];
									ta = Qa[O.d];
									wa[Da] = ca.r;
									wa[Da + 1] = ca.g;
									wa[Da + 2] = ca.b;
									wa[Da + 3] = $.r;
									wa[Da + 4] = $.g;
									wa[Da + 5] = $.b;
									wa[Da + 6] = X.r;
									wa[Da + 7] = X.g;
									wa[Da + 8] = X.b;
									wa[Da + 9] = ta.r;
									wa[Da + 10] = ta.g;
									wa[Da + 11] = ta.b;
									Da += 12
								}
								if (Ha && R.hasTangents) {
									ca = Ba[O.a].tangent;
									$ = Ba[O.b].tangent;
									X = Ba[O.c].tangent;
									O = Ba[O.d].tangent;
									ia[pa] = ca.x;
									ia[pa + 1] = ca.y;
									ia[pa + 2] = ca.z;
									ia[pa + 3] = ca.w;
									ia[pa + 4] = $.x;
									ia[pa + 5] = $.y;
									ia[pa + 6] = $.z;
									ia[pa + 7] = $.w;
									ia[pa + 8] = X.x;
									ia[pa + 9] = X.y;
									ia[pa + 10] = X.z;
									ia[pa + 11] = X.w;
									ia[pa + 12] = O.x;
									ia[pa + 13] = O.y;
									ia[pa + 14] = O.z;
									ia[pa + 15] = O.w;
									pa += 16
								}
								if (Ga)
									if (Ia.length == 4 && ga)
										for (O = 0; O < 4; O++) {
											Ca = Ia[O];
											Ka[ma] = Ca.x;
											Ka[ma + 1] = Ca.y;
											Ka[ma + 2] = Ca.z;
											ma += 3
										} else
											for (O = 0; O < 4; O++) {
												Ka[ma] = Ca.x;
												Ka[ma + 1] = Ca.y;
												Ka[ma + 2] = Ca.z;
												ma += 3
											}
									if (Aa && Ja)
										for (O = 0; O < 4; O++) {
											Ia = Ja[O];
											Ra[P] = Ia.u;
											Ra[P + 1] = Ia.v;
											P += 2
										}
									if (Aa && sa)
										for (O = 0; O < 4; O++) {
											Ja = sa[O];
											Pa[la] = Ja.u;
											Pa[la + 1] = Ja.v;
											la += 2
										}
									if (qa) {
										Q[ja] = D;
										Q[ja + 1] = D + 1;
										Q[ja + 2] = D + 2;
										Q[ja + 3] = D;
										Q[ja + 4] = D + 2;
										Q[ja + 5] = D + 3;
										ja += 6;
										fa[Fa] = D;
										fa[Fa + 1] = D + 1;
										fa[Fa + 2] = D;
										fa[Fa + 3] = D + 3;
										fa[Fa + 4] = D + 1;
										fa[Fa + 5] = D + 2;
										fa[Fa + 6] = D + 2;
										fa[Fa + 7] = D + 3;
										Fa += 8;
										D += 4
									}
							}
						}
						if (ea) {
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLVertexBuffer);
							e.bufferData(e.ARRAY_BUFFER, Ea, T)
						}
						if (La && Qa.length) {
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLColorBuffer);
							e.bufferData(e.ARRAY_BUFFER, wa, T)
						}
						if (Ga) {
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLNormalBuffer);
							e.bufferData(e.ARRAY_BUFFER, Ka, T)
						}
						if (Ha &&
							R.hasTangents) {
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLTangentBuffer);
							e.bufferData(e.ARRAY_BUFFER, ia, T)
						}
						if (Aa && P > 0) {
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLUVBuffer);
							e.bufferData(e.ARRAY_BUFFER, Ra, T)
						}
						if (Aa && la > 0) {
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLUV2Buffer);
							e.bufferData(e.ARRAY_BUFFER, Pa, T)
						}
						if (qa) {
							e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.__webGLFaceBuffer);
							e.bufferData(e.ELEMENT_ARRAY_BUFFER, Q, T);
							e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, n.__webGLLineBuffer);
							e.bufferData(e.ELEMENT_ARRAY_BUFFER, fa, T)
						}
						if (K > 0) {
							e.bindBuffer(e.ARRAY_BUFFER,
								n.__webGLSkinVertexABuffer);
							e.bufferData(e.ARRAY_BUFFER, ua, T);
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLSkinVertexBBuffer);
							e.bufferData(e.ARRAY_BUFFER, xa, T);
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLSkinIndicesBuffer);
							e.bufferData(e.ARRAY_BUFFER, za, T);
							e.bindBuffer(e.ARRAY_BUFFER, n.__webGLSkinWeightsBuffer);
							e.bufferData(e.ARRAY_BUFFER, va, T)
						}
					}
					x(objlist, ba, C, N, p)
				}
				H.__dirtyVertices = !1;
				H.__dirtyElements = !1;
				H.__dirtyUvs = !1;
				H.__dirtyNormals = !1;
				H.__dirtyTangents = !1;
				H.__dirtyColors = !1
			} else if (p instanceof THREE.Ribbon) {
				if (!H.__webGLVertexBuffer) {
					C =
						H;
					C.__webGLVertexBuffer = e.createBuffer();
					C.__webGLColorBuffer = e.createBuffer();
					C = H;
					N = C.vertices.length;
					C.__vertexArray = new Float32Array(N * 3);
					C.__colorArray = new Float32Array(N * 3);
					C.__webGLVertexCount = N;
					H.__dirtyVertices = !0;
					H.__dirtyColors = !0
				}
				if (H.__dirtyVertices || H.__dirtyColors) {
					C = H;
					N = e.DYNAMIC_DRAW;
					D = void 0;
					D = void 0;
					y = void 0;
					n = void 0;
					P = C.vertices;
					T = C.colors;
					la = P.length;
					oa = T.length;
					ja = C.__vertexArray;
					E = C.__colorArray;
					ma = C.__dirtyColors;
					if (C.__dirtyVertices) {
						for (D = 0; D < la; D++) {
							y = P[D].position;
							n = D * 3;
							ja[n] = y.x;
							ja[n + 1] = y.y;
							ja[n + 2] = y.z
						}
						e.bindBuffer(e.ARRAY_BUFFER, C.__webGLVertexBuffer);
						e.bufferData(e.ARRAY_BUFFER, ja, N)
					}
					if (ma) {
						for (D = 0; D < oa; D++) {
							color = T[D];
							n = D * 3;
							E[n] = color.r;
							E[n + 1] = color.g;
							E[n + 2] = color.b
						}
						e.bindBuffer(e.ARRAY_BUFFER, C.__webGLColorBuffer);
						e.bufferData(e.ARRAY_BUFFER, E, N)
					}
				}
				x(objlist, ba, 0, H, p);
				H.__dirtyVertices = !1;
				H.__dirtyColors = !1
			} else if (p instanceof THREE.Line) {
				if (!H.__webGLVertexBuffer) {
					C = H;
					C.__webGLVertexBuffer = e.createBuffer();
					C.__webGLColorBuffer = e.createBuffer();
					C = H;
					N = C.vertices.length;
					C.__vertexArray = new Float32Array(N * 3);
					C.__colorArray = new Float32Array(N * 3);
					C.__webGLLineCount = N;
					H.__dirtyVertices = !0;
					H.__dirtyColors = !0
				}
				if (H.__dirtyVertices || H.__dirtyColors) {
					C = H;
					N = e.DYNAMIC_DRAW;
					D = void 0;
					D = void 0;
					y = void 0;
					n = void 0;
					P = C.vertices;
					T = C.colors;
					la = P.length;
					oa = T.length;
					ja = C.__vertexArray;
					E = C.__colorArray;
					ma = C.__dirtyColors;
					if (C.__dirtyVertices) {
						for (D = 0; D < la; D++) {
							y = P[D].position;
							n = D * 3;
							ja[n] = y.x;
							ja[n + 1] = y.y;
							ja[n + 2] = y.z
						}
						e.bindBuffer(e.ARRAY_BUFFER, C.__webGLVertexBuffer);
						e.bufferData(e.ARRAY_BUFFER,
							ja, N)
					}
					if (ma) {
						for (D = 0; D < oa; D++) {
							color = T[D];
							n = D * 3;
							E[n] = color.r;
							E[n + 1] = color.g;
							E[n + 2] = color.b
						}
						e.bindBuffer(e.ARRAY_BUFFER, C.__webGLColorBuffer);
						e.bufferData(e.ARRAY_BUFFER, E, N)
					}
				}
				x(objlist, ba, 0, H, p);
				H.__dirtyVertices = !1;
				H.__dirtyColors = !1
			} else if (p instanceof THREE.ParticleSystem) {
				if (!H.__webGLVertexBuffer) {
					C = H;
					C.__webGLVertexBuffer = e.createBuffer();
					C.__webGLColorBuffer = e.createBuffer();
					C = H;
					N = C.vertices.length;
					C.__vertexArray = new Float32Array(N * 3);
					C.__colorArray = new Float32Array(N * 3);
					C.__sortArray = [];
					C.__webGLParticleCount = N;
					H.__dirtyVertices = !0;
					H.__dirtyColors = !0
				}(H.__dirtyVertices || H.__dirtyColors || p.sortParticles) && b(H, e.DYNAMIC_DRAW, p, camera);
				x(objlist, ba, 0, H, p);
				H.__dirtyVertices = !1;
				H.__dirtyColors = !1
			} else if (THREE.MarchingCubes !== undefined && p instanceof THREE.MarchingCubes) {
				H = ba;
				if (H[0] == undefined) {
					n.__webGLObjectsImmediate.push({
						object: p,
						opaque: {
							list: [],
							count: 0
						},
						transparent: {
							list: [],
							count: 0
						}
					});
					H[0] = 1
				}
			}
		}
	};
	this.removeObject = function(l, z) {
		var B, p;
		for (B = l.__webGLObjects.length - 1; B >= 0; B--) {
			p =
				l.__webGLObjects[B].object;
			z == p && l.__webGLObjects.splice(B, 1)
		}
	};
	this.setFaceCulling = function(l, z) {
		if (l) {
			!z || z == "ccw" ? e.frontFace(e.CCW) : e.frontFace(e.CW);
			if (l == "back") e.cullFace(e.BACK);
			else l == "front" ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK);
			e.enable(e.CULL_FACE)
		} else e.disable(e.CULL_FACE)
	};
	this.supportsVertexTextures = function() {
		return e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0
	}
};
THREE.Snippets = {
	fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",
	fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube env_map;\nuniform int combine;\n#endif",
	envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( env_map, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refraction_ratio;\nuniform bool useRefract;\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refraction_ratio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
	map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
	map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",
	map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\n#endif",
	map_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",
	map_vertex: "#ifdef USE_MAP\nvUv = uv;\n#endif",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D light_map;\n#endif",
	lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
	lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( light_map, vUv2 );\n#endif",
	lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",
	lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
	lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\nfloat pointLightWeighting = max( dot( transformedNormal, pointLightVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting;\n#ifdef PHONG\nvPointLightVector[ i ] = pointLightVector;\n#endif\n}\n#endif\n}",
	lights_pars_fragment: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec3 vPointLightVector[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
	lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec3 pointVector = normalize( vPointLightVector[ i ] );\nvec3 pointHalfVector = normalize( vPointLightVector[ i ] + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight;\npointSpecular += mSpecular * pointSpecularWeight;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
	color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
	color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",
	color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",
	color_vertex: "#ifdef USE_COLOR\nvColor = color;\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[20];\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif"
};
THREE.UniformsLib = {
	common: {
		diffuse: {
			type: "c",
			value: new THREE.Color(15658734)
		},
		opacity: {
			type: "f",
			value: 1
		},
		map: {
			type: "t",
			value: 0,
			texture: null
		},
		light_map: {
			type: "t",
			value: 2,
			texture: null
		},
		env_map: {
			type: "t",
			value: 1,
			texture: null
		},
		useRefract: {
			type: "i",
			value: 0
		},
		reflectivity: {
			type: "f",
			value: 1
		},
		refraction_ratio: {
			type: "f",
			value: 0.98
		},
		combine: {
			type: "i",
			value: 0
		},
		fogDensity: {
			type: "f",
			value: 2.5E-4
		},
		fogNear: {
			type: "f",
			value: 1
		},
		fogFar: {
			type: "f",
			value: 2E3
		},
		fogColor: {
			type: "c",
			value: new THREE.Color(16777215)
		}
	},
	lights: {
		enableLighting: {
			type: "i",
			value: 1
		},
		ambientLightColor: {
			type: "fv",
			value: []
		},
		directionalLightDirection: {
			type: "fv",
			value: []
		},
		directionalLightColor: {
			type: "fv",
			value: []
		},
		pointLightPosition: {
			type: "fv",
			value: []
		},
		pointLightColor: {
			type: "fv",
			value: []
		}
	},
	particle: {
		psColor: {
			type: "c",
			value: new THREE.Color(15658734)
		},
		opacity: {
			type: "f",
			value: 1
		},
		size: {
			type: "f",
			value: 1
		},
		map: {
			type: "t",
			value: 0,
			texture: null
		},
		fogDensity: {
			type: "f",
			value: 2.5E-4
		},
		fogNear: {
			type: "f",
			value: 1
		},
		fogFar: {
			type: "f",
			value: 2E3
		},
		fogColor: {
			type: "c",
			value: new THREE.Color(16777215)
		}
	}
};
THREE.ShaderLib = {
	depth: {
		uniforms: {
			mNear: {
				type: "f",
				value: 1
			},
			mFar: {
				type: "f",
				value: 2E3
			},
			opacity: {
				type: "f",
				value: 1
			}
		},
		fragment_shader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}",
		vertex_shader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"
	},
	normal: {
		uniforms: {
			opacity: {
				type: "f",
				value: 1
			}
		},
		fragment_shader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}",
		vertex_shader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"
	},
	basic: {
		uniforms: THREE.UniformsLib.common,
		fragment_shader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.Snippets.color_pars_fragment,
			THREE.Snippets.map_pars_fragment, THREE.Snippets.lightmap_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.Snippets.map_fragment, THREE.Snippets.lightmap_fragment, THREE.Snippets.color_fragment, THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"
		].join("\n"),
		vertex_shader: [THREE.Snippets.map_pars_vertex, THREE.Snippets.lightmap_pars_vertex, THREE.Snippets.envmap_pars_vertex, THREE.Snippets.color_pars_vertex,
			THREE.Snippets.skinning_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.lightmap_vertex, THREE.Snippets.envmap_vertex, THREE.Snippets.color_vertex, THREE.Snippets.skinning_vertex, "}"
		].join("\n")
	},
	lambert: {
		uniforms: Uniforms.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights]),
		fragment_shader: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.Snippets.color_pars_fragment, THREE.Snippets.map_pars_fragment,
			THREE.Snippets.lightmap_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.Snippets.map_fragment, THREE.Snippets.lightmap_fragment, THREE.Snippets.color_fragment, THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"
		].join("\n"),
		vertex_shader: ["varying vec3 vLightWeighting;", THREE.Snippets.map_pars_vertex, THREE.Snippets.lightmap_pars_vertex,
			THREE.Snippets.envmap_pars_vertex, THREE.Snippets.lights_pars_vertex, THREE.Snippets.color_pars_vertex, THREE.Snippets.skinning_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.lightmap_vertex, THREE.Snippets.envmap_vertex, THREE.Snippets.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.Snippets.lights_vertex, THREE.Snippets.skinning_vertex, "}"
		].join("\n")
	},
	phong: {
		uniforms: Uniforms.merge([THREE.UniformsLib.common,
			THREE.UniformsLib.lights, {
				ambient: {
					type: "c",
					value: new THREE.Color(328965)
				},
				specular: {
					type: "c",
					value: new THREE.Color(1118481)
				},
				shininess: {
					type: "f",
					value: 30
				}
			}
		]),
		fragment_shader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;", THREE.Snippets.color_pars_fragment, THREE.Snippets.map_pars_fragment, THREE.Snippets.lightmap_pars_fragment, THREE.Snippets.envmap_pars_fragment, THREE.Snippets.fog_pars_fragment,
			THREE.Snippets.lights_pars_fragment, "void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );", THREE.Snippets.lights_fragment, THREE.Snippets.map_fragment, THREE.Snippets.lightmap_fragment, THREE.Snippets.color_fragment, THREE.Snippets.envmap_fragment, THREE.Snippets.fog_fragment, "}"
		].join("\n"),
		vertex_shader: ["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.Snippets.map_pars_vertex, THREE.Snippets.lightmap_pars_vertex, THREE.Snippets.envmap_pars_vertex,
			THREE.Snippets.lights_pars_vertex, THREE.Snippets.color_pars_vertex, THREE.Snippets.skinning_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.Snippets.map_vertex, THREE.Snippets.lightmap_vertex, THREE.Snippets.envmap_vertex, THREE.Snippets.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;",
			THREE.Snippets.lights_vertex, THREE.Snippets.skinning_vertex, "}"
		].join("\n")
	},
	particle_basic: {
		uniforms: THREE.UniformsLib.particle,
		fragment_shader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.Snippets.color_pars_fragment, THREE.Snippets.map_particle_pars_fragment, THREE.Snippets.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.Snippets.map_particle_fragment, THREE.Snippets.color_fragment, THREE.Snippets.fog_fragment, "}"].join("\n"),
		vertex_shader: ["uniform float size;",
			THREE.Snippets.color_pars_vertex, "void main() {", THREE.Snippets.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\ngl_PointSize = size;\n}"
		].join("\n")
	}
};
THREE.RenderableObject = function() {
	this.z = this.object = null
};
THREE.RenderableFace3 = function() {
	this.z = null;
	this.v1 = new THREE.Vertex;
	this.v2 = new THREE.Vertex;
	this.v3 = new THREE.Vertex;
	this.centroidWorld = new THREE.Vector3;
	this.centroidScreen = new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.vertexNormalsWorld = [];
	this.faceMaterials = this.meshMaterials = null;
	this.overdraw = !1;
	this.uvs = [null, null, null]
};
THREE.RenderableParticle = function() {
	this.rotation = this.z = this.y = this.x = null;
	this.scale = new THREE.Vector2;
	this.materials = null
};
THREE.RenderableLine = function() {
	this.z = null;
	this.v1 = new THREE.Vertex;
	this.v2 = new THREE.Vertex;
	this.materials = null
};
THREE.Detector = {
	canvas: !! window.CanvasRenderingContext2D,
	webgl: !! window.WebGLRenderingContext,
	workers: !! window.Worker,
	addGetWebGLMessage: function(a) {
		var b = document.body,
			c = "oldie";
		if (a) {
			if (a.parent !== undefined) b = a.parent;
			if (a.id !== undefined) c = a.id
		}
		a = document.createElement("center");
		var d = document.createElement("div");
		d.innerHTML = 'Sorry, your browser doesn\'t support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a><br/>\n<br/>\nPlease try in\n<a href="http://www.google.com/chrome">Chrome 9+</a> /\n<a href="http://www.mozilla.com/en-US/firefox/all-beta.html">Firefox 4+</a> /\n<a href="http://nightly.webkit.org/">Safari OSX 10.6+</a>';
		d.id =
			c;
		c = d.style;
		c.fontFamily = "monospace";
		c.fontSize = "13px";
		c.textAlign = "center";
		c.background = "#eee";
		c.color = "#000";
		c.padding = "1em";
		c.width = "475px";
		c.margin = "5em auto 0";
		a.appendChild(d);
		b.appendChild(a);
		return d
	}
};
var GeometryUtils = {
	merge: function(a, b) {
		var c = b instanceof THREE.Mesh,
			d = a.vertices.length,
			f = c ? b.geometry : b,
			g = a.vertices,
			h = f.vertices,
			k = a.faces,
			j = f.faces,
			m = a.uvs;
		f = f.uvs;
		c && b.matrixAutoUpdate && b.updateMatrix();
		for (var o = 0, w = h.length; o < w; o++) {
			var u = new THREE.Vertex(h[o].position.clone());
			c && b.localMatrix.multiplyVector3(u.position);
			g.push(u)
		}
		o = 0;
		for (w = j.length; o < w; o++) {
			h = j[o];
			var t, x = h.vertexNormals;
			if (h instanceof THREE.Face3) t = new THREE.Face3(h.a + d, h.b + d, h.c + d);
			else h instanceof THREE.Face4 && (t = new THREE.Face4(h.a +
				d, h.b + d, h.c + d, h.d + d));
			t.centroid.copy(h.centroid);
			t.normal.copy(h.normal);
			c = 0;
			for (g = x.length; c < g; c++) {
				u = x[c];
				t.vertexNormals.push(u.clone())
			}
			t.materials = h.materials.slice();
			k.push(t)
		}
		o = 0;
		for (w = f.length; o < w; o++) {
			d = f[o];
			k = [];
			c = 0;
			for (g = d.length; c < g; c++) k.push(new THREE.UV(d[c].u, d[c].v));
			m.push(k)
		}
	}
}, ImageUtils = {
		loadTexture: function(a, b, c) {
			var d = new Image,
				f = new THREE.Texture(d, b);
			d.onload = function() {
				f.needsUpdate = !0;
				c && c(this)
			};
			d.src = a;
			return f
		},
		loadTextureCube: function(a, b, c) {
			var d, f = [],
				g = new THREE.Texture(f,
					b);
			b = f.loadCount = 0;
			for (d = a.length; b < d; ++b) {
				f[b] = new Image;
				f[b].onload = function() {
					f.loadCount += 1;
					if (f.loadCount == 6) g.needsUpdate = !0;
					c && c(this)
				};
				f[b].src = a[b]
			}
			return g
		}
	}, SceneUtils = {
		loadScene: function(a, b, c, d) {
			a = new Worker(a);
			a.postMessage(0);
			a.onmessage = function(f) {
				function g() {
					for (o in L.objects)
						if (!G.objects[o]) {
							A = L.objects[o];
							if (q = G.geometries[A.geometry]) {
								aa = [];
								for (i = 0; i < A.materials.length; i++) aa[i] = G.materials[A.materials[i]];
								F = A.position;
								r = A.rotation;
								s = A.scale;
								object = new THREE.Mesh(q, aa);
								object.position.set(F[0],
									F[1], F[2]);
								object.rotation.set(r[0], r[1], r[2]);
								object.scale.set(s[0], s[1], s[2]);
								object.visible = A.visible;
								G.scene.addObject(object);
								G.objects[o] = object
							}
						}
				}

				function h(U) {
					return function(na) {
						G.geometries[U] = na;
						g();
						V -= 1;
						k()
					}
				}

				function k() {
					d({
						total_models: Y,
						total_textures: Z,
						loaded_models: Y - V,
						loaded_textures: Z - S
					}, G);
					V == 0 && S == 0 && c(G)
				}
				var j, m, o, w, u, t, x, A, F, v, I, q, J, e, aa, L, M, V, S, Y, Z, G;
				L = f.data;
				M = new THREE.Loader;
				S = V = 0;
				G = {
					scene: new THREE.Scene,
					geometries: {},
					materials: {},
					textures: {},
					objects: {},
					cameras: {},
					lights: {},
					fogs: {}
				};
				f = function() {
					S -= 1;
					k()
				};
				for (u in L.cameras) {
					v = L.cameras[u];
					if (v.type == "perspective") J = new THREE.Camera(v.fov, v.aspect, v.near, v.far);
					else if (v.type == "ortho") {
						J = new THREE.Camera;
						J.projectionMatrix = THREE.Matrix4.makeOrtho(v.left, v.right, v.top, v.bottom, v.near, v.far)
					}
					F = v.position;
					v = v.target;
					J.position.set(F[0], F[1], F[2]);
					J.target.position.set(v[0], v[1], v[2]);
					G.cameras[u] = J
				}
				for (w in L.lights) {
					u = L.lights[w];
					if (u.type == "directional") {
						F = u.direction;
						light = new THREE.DirectionalLight;
						light.position.set(F[0],
							F[1], F[2]);
						light.position.normalize()
					} else if (u.type == "point") {
						F = u.position;
						light = new THREE.PointLight;
						light.position.set(F[0], F[1], F[2])
					}
					v = u.color;
					i = u.intensity || 1;
					light.color.setRGB(v[0] * i, v[1] * i, v[2] * i);
					G.scene.addLight(light);
					G.lights[w] = light
				}
				for (t in L.fogs) {
					w = L.fogs[t];
					if (w.type == "linear") e = new THREE.Fog(0, w.near, w.far);
					else w.type == "exp2" && (e = new THREE.FogExp2(0, w.density));
					v = w.color;
					e.color.setRGB(v[0], v[1], v[2]);
					G.fogs[t] = e
				}
				if (G.cameras && L.defaults.camera) G.currentCamera = G.cameras[L.defaults.camera];
				if (G.fogs && L.defaults.fog) G.scene.fog = G.fogs[L.defaults.fog];
				v = L.defaults.bgcolor;
				G.bgColor = new THREE.Color;
				G.bgColor.setRGB(v[0], v[1], v[2]);
				G.bgColorAlpha = L.defaults.bgalpha;
				for (j in L.geometries) {
					t = L.geometries[j];
					if (t.type == "bin_mesh" || t.type == "ascii_mesh") V += 1
				}
				Y = V;
				for (j in L.geometries) {
					t = L.geometries[j];
					if (t.type == "cube") {
						q = new Cube(t.width, t.height, t.depth, t.segments_width, t.segments_height, null, t.flipped, t.sides);
						G.geometries[j] = q
					} else if (t.type == "plane") {
						q = new Plane(t.width, t.height, t.segments_width,
							t.segments_height);
						G.geometries[j] = q
					} else if (t.type == "sphere") {
						q = new Sphere(t.radius, t.segments_width, t.segments_height);
						G.geometries[j] = q
					} else if (t.type == "cylinder") {
						q = new Cylinder(t.numSegs, t.topRad, t.botRad, t.height, t.topOffset, t.botOffset);
						G.geometries[j] = q
					} else if (t.type == "torus") {
						q = new Torus(t.radius, t.tube, t.segmentsR, t.segmentsT);
						G.geometries[j] = q
					} else if (t.type == "icosahedron") {
						q = new Icosahedron(t.subdivisions);
						G.geometries[j] = q
					} else if (t.type == "bin_mesh") M.loadBinary({
						model: t.url,
						callback: h(j)
					});
					else t.type == "ascii_mesh" && M.loadAscii({
						model: t.url,
						callback: h(j)
					})
				}
				for (x in L.textures) {
					j = L.textures[x];
					S += j.url instanceof Array ? j.url.length : 1
				}
				Z = S;
				for (x in L.textures) {
					j = L.textures[x];
					if (j.mapping != undefined && THREE[j.mapping] != undefined) j.mapping = new THREE[j.mapping];
					if (j.url instanceof Array) {
						t = ImageUtils.loadArray(j.url, f);
						t = new THREE.Texture(t, j.mapping)
					} else {
						t = ImageUtils.loadTexture(j.url, j.mapping, f);
						if (THREE[j.min_filter] != undefined) t.min_filter = THREE[j.min_filter];
						if (THREE[j.mag_filter] !=
							undefined) t.mag_filter = THREE[j.mag_filter]
					}
					G.textures[x] = t
				}
				for (m in L.materials) {
					x = L.materials[m];
					for (I in x.parameters)
						if (I == "env_map" || I == "map" || I == "light_map") x.parameters[I] = G.textures[x.parameters[I]];
						else
					if (I == "shading") x.parameters[I] = x.parameters[I] == "flat" ? THREE.FlatShading : THREE.SmoothShading;
					else if (I == "blending") x.parameters[I] = THREE[x.parameters[I]] ? THREE[x.parameters[I]] : THREE.NormalBlending;
					else I == "combine" && (x.parameters[I] = x.parameters[I] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation);
					x = new THREE[x.type](x.parameters);
					G.materials[m] = x
				}
				g();
				b(G)
			}
		},
		addMesh: function(a, b, c, d, f, g, h, k, j, m) {
			b = new THREE.Mesh(b, m);
			b.scale.x = b.scale.y = b.scale.z = c;
			b.position.x = d;
			b.position.y = f;
			b.position.z = g;
			b.rotation.x = h;
			b.rotation.y = k;
			b.rotation.z = j;
			a.addObject(b);
			return b
		},
		addPanoramaCubeWebGL: function(a, b, c) {
			var d = ShaderUtils.lib.cube;
			d.uniforms.tCube.texture = c;
			c = new THREE.MeshShaderMaterial({
				fragment_shader: d.fragment_shader,
				vertex_shader: d.vertex_shader,
				uniforms: d.uniforms
			});
			b = new THREE.Mesh(new Cube(b,
				b, b, 1, 1, null, !0), c);
			a.addObject(b);
			return b
		},
		addPanoramaCube: function(a, b, c) {
			var d = [];
			d.push(new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[0])
			}));
			d.push(new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[1])
			}));
			d.push(new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[2])
			}));
			d.push(new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[3])
			}));
			d.push(new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[4])
			}));
			d.push(new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[5])
			}));
			b = new THREE.Mesh(new Cube(b,
				b, b, 1, 1, d, !0), new THREE.MeshFaceMaterial);
			a.addObject(b);
			return b
		},
		addPanoramaCubePlanes: function(a, b, c) {
			var d = b / 2;
			b = new Plane(b, b);
			var f = Math.PI / 2,
				g = Math.PI;
			SceneUtils.addMesh(a, b, 1, 0, 0, -d, 0, 0, 0, new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[5])
			}));
			SceneUtils.addMesh(a, b, 1, -d, 0, 0, 0, f, 0, new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[0])
			}));
			SceneUtils.addMesh(a, b, 1, d, 0, 0, 0, -f, 0, new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[1])
			}));
			SceneUtils.addMesh(a, b, 1, 0, d, 0, f, 0, g, new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[2])
			}));
			SceneUtils.addMesh(a, b, 1, 0, -d, 0, -f, 0, g, new THREE.MeshBasicMaterial({
				map: new THREE.Texture(c[3])
			}))
		}
	}, ShaderUtils = {
		lib: {
			fresnel: {
				uniforms: {
					mRefractionRatio: {
						type: "f",
						value: 1.02
					},
					mFresnelBias: {
						type: "f",
						value: 0.1
					},
					mFresnelPower: {
						type: "f",
						value: 2
					},
					mFresnelScale: {
						type: "f",
						value: 1
					},
					tCube: {
						type: "t",
						value: 1,
						texture: null
					}
				},
				fragment_shader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
				vertex_shader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"
			},
			normal: {
				uniforms: {
					enableAO: {
						type: "i",
						value: 0
					},
					enableDiffuse: {
						type: "i",
						value: 0
					},
					tDiffuse: {
						type: "t",
						value: 0,
						texture: null
					},
					tNormal: {
						type: "t",
						value: 2,
						texture: null
					},
					tAO: {
						type: "t",
						value: 3,
						texture: null
					},
					uNormalScale: {
						type: "f",
						value: 1
					},
					tDisplacement: {
						type: "t",
						value: 4,
						texture: null
					},
					uDisplacementBias: {
						type: "f",
						value: -0.5
					},
					uDisplacementScale: {
						type: "f",
						value: 2.5
					},
					uPointLightPos: {
						type: "v3",
						value: new THREE.Vector3
					},
					uPointLightColor: {
						type: "c",
						value: new THREE.Color(15658734)
					},
					uDirLightPos: {
						type: "v3",
						value: new THREE.Vector3
					},
					uDirLightColor: {
						type: "c",
						value: new THREE.Color(15658734)
					},
					uAmbientLightColor: {
						type: "c",
						value: new THREE.Color(328965)
					},
					uDiffuseColor: {
						type: "c",
						value: new THREE.Color(15658734)
					},
					uSpecularColor: {
						type: "c",
						value: new THREE.Color(1118481)
					},
					uAmbientColor: {
						type: "c",
						value: new THREE.Color(328965)
					},
					uShininess: {
						type: "f",
						value: 30
					}
				},
				fragment_shader: "uniform vec3 uDirLightPos;\nuniform vec3 uAmbientLightColor;\nuniform vec3 uDirLightColor;\nuniform vec3 uPointLightColor;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform bool enableDiffuse;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );\nvec3 aoTex = vec3( 1.0, 1.0, 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ndiffuseTex = texture2D( tDiffuse, vUv ).xyz;\nif( enableAO )\naoTex = texture2D( tAO, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec3 pointVector = normalize( vPointLightVector );\nvec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, uShininess );\npointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;\npointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight;\nvec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, uShininess );\ndirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;\ndirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight;\nvec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );\ntotalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );\ntotalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );\ngl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );\n}",
				vertex_shader: "attribute vec4 tangent;\nuniform vec3 uPointLightPos;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\nvec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );\nvPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"
			},
			cube: {
				uniforms: {
					tCube: {
						type: "t",
						value: 1,
						texture: null
					}
				},
				vertex_shader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
				fragment_shader: "uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"
			},
			convolution: {
				uniforms: {
					tDiffuse: {
						type: "t",
						value: 0,
						texture: null
					},
					uImageIncrement: {
						type: "v2",
						value: new THREE.Vector2(0.001953125, 0)
					},
					cKernel: {
						type: "fv1",
						value: []
					}
				},
				vertex_shader: "varying vec2 vUv;\nuniform vec2 uImageIncrement;\nvoid main(void) {\nvUv = uv - ((KERNEL_SIZE - 1.0) / 2.0) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
				fragment_shader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nuniform float cKernel[KERNEL_SIZE];\nvoid main(void) {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i=0; i<KERNEL_SIZE; ++i ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[i];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}"
			},
			film: {
				uniforms: {
					tDiffuse: {
						type: "t",
						value: 0,
						texture: null
					},
					time: {
						type: "f",
						value: 0
					},
					nIntensity: {
						type: "f",
						value: 0.5
					},
					sIntensity: {
						type: "f",
						value: 0.05
					},
					sCount: {
						type: "f",
						value: 4096
					},
					grayscale: {
						type: "i",
						value: 1
					}
				},
				vertex_shader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
				fragment_shader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\ncResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}"
			},
			screen: {
				uniforms: {
					tDiffuse: {
						type: "t",
						value: 0,
						texture: null
					},
					opacity: {
						type: "f",
						value: 1
					}
				},
				vertex_shader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
				fragment_shader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float opacity;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"
			},
			basic: {
				uniforms: {},
				vertex_shader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
				fragment_shader: "void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}"
			}
		},
		buildKernel: function(a) {
			var b, c, d, f, g = 2 * Math.ceil(a * 3) + 1;
			g > 25 && (g = 25);
			f = (g - 1) * 0.5;
			c = Array(g);
			for (b = d = 0; b < g; ++b) {
				c[b] = Math.exp(-((b - f) * (b - f)) / (2 * a * a));
				d += c[b]
			}
			for (b = 0; b < g; ++b) c[b] /= d;
			return c
		}
	}, Cube = function(a, b, c, d, f, g, h, k) {
		function j(A, F, v, I, q, J, e, aa) {
			var L, M, V = d || 1,
				S = f || 1,
				Y = V + 1,
				Z = S + 1,
				G = q / 2,
				U = J / 2;
			q /= V;
			var na = J / S,
				W = m.vertices.length;
			if (A == "x" && F == "y" || A == "y" && F == "x") L = "z";
			else if (A == "x" && F == "z" || A == "z" && F == "x") L = "y";
			else if (A == "z" && F == "y" || A == "y" && F == "z") L = "x";
			for (M = 0; M < Z; M++)
				for (J = 0; J < Y; J++) {
					var ka = new THREE.Vector3;
					ka[A] = (J * q - G) * v;
					ka[F] = (M * na - U) * I;
					ka[L] = e;
					m.vertices.push(new THREE.Vertex(ka))
				}
			for (M = 0; M < S; M++)
				for (J = 0; J < V; J++) {
					m.faces.push(new THREE.Face4(J + Y * M + W, J + Y * (M + 1) + W, J + 1 + Y * (M + 1) + W, J + 1 + Y * M + W, null, aa));
					m.uvs.push([new THREE.UV(J / V, M / S), new THREE.UV(J / V, (M + 1) / S), new THREE.UV((J + 1) / V, (M + 1) / S), new THREE.UV((J + 1) / V, M / S)])
				}
		}
		THREE.Geometry.call(this);
		var m = this,
			o = a / 2,
			w = b / 2,
			u = c / 2;
		h = h ? -1 : 1;
		if (g !== undefined)
			if (g instanceof Array) this.materials = g;
			else {
				this.materials = [];
				for (var t = 0; t < 6; t++) this.materials.push([g])
			} else this.materials = [];
		this.sides = {
			px: !0,
			nx: !0,
			py: !0,
			ny: !0,
			pz: !0,
			nz: !0
		};
		if (k != undefined)
			for (var x in k) this.sides[x] != undefined && (this.sides[x] = k[x]);
		this.sides.px && j("z", "y", 1 * h, -1, c, b, -o, this.materials[0]);
		this.sides.nx && j("z", "y", -1 * h, -1, c, b, o, this.materials[1]);
		this.sides.py && j("x", "z", 1 * h, 1, a, c, w, this.materials[2]);
		this.sides.ny && j("x", "z", 1 * h, -1, a, c, -w, this.materials[3]);
		this.sides.pz && j("x", "y", 1 * h, -1,
			a, b, u, this.materials[4]);
		this.sides.nz && j("x", "y", -1 * h, -1, a, b, -u, this.materials[5]);
		(function() {
			for (var A = [], F = [], v = 0, I = m.vertices.length; v < I; v++) {
				for (var q = m.vertices[v], J = !1, e = 0, aa = A.length; e < aa; e++) {
					var L = A[e];
					if (q.position.x == L.position.x && q.position.y == L.position.y && q.position.z == L.position.z) {
						F[v] = e;
						J = !0;
						break
					}
				}
				if (!J) {
					F[v] = A.length;
					A.push(new THREE.Vertex(q.position.clone()))
				}
			}
			v = 0;
			for (I = m.faces.length; v < I; v++) {
				q = m.faces[v];
				q.a = F[q.a];
				q.b = F[q.b];
				q.c = F[q.c];
				q.d = F[q.d]
			}
			m.vertices = A
		})();
		this.computeCentroids();
		this.computeFaceNormals();
		this.sortFacesByMaterial()
	};
Cube.prototype = new THREE.Geometry;
Cube.prototype.constructor = Cube;
var Cylinder = function(a, b, c, d, f) {
	function g(m, o, w) {
		h.vertices.push(new THREE.Vertex(new THREE.Vector3(m, o, w)))
	}
	THREE.Geometry.call(this);
	var h = this,
		k = Math.PI,
		j;
	for (j = 0; j < a; j++) g(Math.sin(2 * k * j / a) * b, Math.cos(2 * k * j / a) * b, 0);
	for (j = 0; j < a; j++) g(Math.sin(2 * k * j / a) * c, Math.cos(2 * k * j / a) * c, d);
	for (j = 0; j < a; j++) h.faces.push(new THREE.Face4(j, j + a, a + (j + 1) % a, (j + 1) % a));
	if (c != 0) {
		g(0, 0, -f);
		for (j = a; j < a + a / 2; j++) h.faces.push(new THREE.Face4(2 * a, (2 * j - 2 * a) % a, (2 * j - 2 * a + 1) % a, (2 * j - 2 * a + 2) % a))
	}
	if (b != 0) {
		g(0, 0, d + f);
		for (j = a + a / 2; j <
			2 * a; j++) h.faces.push(new THREE.Face4((2 * j - 2 * a + 2) % a + a, (2 * j - 2 * a + 1) % a + a, (2 * j - 2 * a) % a + a, 2 * a + 1))
	}
	this.computeCentroids();
	this.computeFaceNormals();
	this.sortFacesByMaterial()
};
Cylinder.prototype = new THREE.Geometry;
Cylinder.prototype.constructor = Cylinder;
var Plane = function(a, b, c, d) {
	THREE.Geometry.call(this);
	var f, g = a / 2,
		h = b / 2;
	c = c || 1;
	d = d || 1;
	var k = c + 1,
		j = d + 1;
	a /= c;
	var m = b / d;
	for (f = 0; f < j; f++)
		for (b = 0; b < k; b++) this.vertices.push(new THREE.Vertex(new THREE.Vector3(b * a - g, -(f * m - h), 0)));
	for (f = 0; f < d; f++)
		for (b = 0; b < c; b++) {
			this.faces.push(new THREE.Face4(b + k * f, b + k * (f + 1), b + 1 + k * (f + 1), b + 1 + k * f));
			this.uvs.push([new THREE.UV(b / c, f / d), new THREE.UV(b / c, (f + 1) / d), new THREE.UV((b + 1) / c, (f + 1) / d), new THREE.UV((b + 1) / c, f / d)])
		}
	this.computeCentroids();
	this.computeFaceNormals();
	this.sortFacesByMaterial()
};
Plane.prototype = new THREE.Geometry;
Plane.prototype.constructor = Plane;
var Sphere = function(a, b, c) {
	THREE.Geometry.call(this);
	var d, f = Math.PI,
		g = Math.max(3, b || 8),
		h = Math.max(2, c || 6);
	b = [];
	for (c = 0; c < h + 1; c++) {
		d = c / h;
		var k = a * Math.cos(d * f),
			j = a * Math.sin(d * f),
			m = [],
			o = 0;
		for (d = 0; d < g; d++) {
			var w = 2 * d / g,
				u = j * Math.sin(w * f);
			w = j * Math.cos(w * f);
			(c == 0 || c == h) && d > 0 || (o = this.vertices.push(new THREE.Vertex(new THREE.Vector3(w, k, u))) - 1);
			m.push(o)
		}
		b.push(m)
	}
	var t, x, A;
	f = b.length;
	for (c = 0; c < f; c++) {
		g = b[c].length;
		if (c > 0)
			for (d = 0; d < g; d++) {
				m = d == g - 1;
				h = b[c][m ? 0 : d + 1];
				k = b[c][m ? g - 1 : d];
				j = b[c - 1][m ? g - 1 : d];
				m = b[c - 1][m ?
					0 : d + 1
				];
				u = c / (f - 1);
				t = (c - 1) / (f - 1);
				x = (d + 1) / g;
				w = d / g;
				o = new THREE.UV(1 - x, u);
				u = new THREE.UV(1 - w, u);
				w = new THREE.UV(1 - w, t);
				var F = new THREE.UV(1 - x, t);
				if (c < b.length - 1) {
					t = this.vertices[h].position.clone();
					x = this.vertices[k].position.clone();
					A = this.vertices[j].position.clone();
					t.normalize();
					x.normalize();
					A.normalize();
					this.faces.push(new THREE.Face3(h, k, j, [new THREE.Vector3(t.x, t.y, t.z), new THREE.Vector3(x.x, x.y, x.z), new THREE.Vector3(A.x, A.y, A.z)]));
					this.uvs.push([o, u, w])
				}
				if (c > 1) {
					t = this.vertices[h].position.clone();
					x = this.vertices[j].position.clone();
					A = this.vertices[m].position.clone();
					t.normalize();
					x.normalize();
					A.normalize();
					this.faces.push(new THREE.Face3(h, j, m, [new THREE.Vector3(t.x, t.y, t.z), new THREE.Vector3(x.x, x.y, x.z), new THREE.Vector3(A.x, A.y, A.z)]));
					this.uvs.push([o, w, F])
				}
			}
	}
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
	this.sortFacesByMaterial();
	this.boundingSphere = {
		radius: a
	}
};
Sphere.prototype = new THREE.Geometry;
Sphere.prototype.constructor = Sphere;
var Torus = function(a, b, c, d) {
	this.radius = a || 100;
	this.tube = b || 40;
	this.segmentsR = c || 8;
	this.segmentsT = d || 6;
	a = [];
	THREE.Geometry.call(this);
	for (b = 0; b <= this.segmentsR; ++b)
		for (c = 0; c <= this.segmentsT; ++c) {
			d = c / this.segmentsT * 2 * Math.PI;
			var f = b / this.segmentsR * 2 * Math.PI;
			this.vertices.push(new THREE.Vertex(new THREE.Vector3((this.radius + this.tube * Math.cos(f)) * Math.cos(d), (this.radius + this.tube * Math.cos(f)) * Math.sin(d), this.tube * Math.sin(f))));
			a.push([c / this.segmentsT, 1 - b / this.segmentsR])
		}
	for (b = 1; b <= this.segmentsR; ++b)
		for (c =
			1; c <= this.segmentsT; ++c) {
			d = (this.segmentsT + 1) * b + c;
			f = (this.segmentsT + 1) * b + c - 1;
			var g = (this.segmentsT + 1) * (b - 1) + c - 1,
				h = (this.segmentsT + 1) * (b - 1) + c;
			this.faces.push(new THREE.Face4(d, f, g, h));
			this.uvs.push([new THREE.UV(a[d][0], a[d][1]), new THREE.UV(a[f][0], a[f][1]), new THREE.UV(a[g][0], a[g][1]), new THREE.UV(a[h][0], a[h][1])])
		}
	delete a;
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
	this.sortFacesByMaterial()
};
Torus.prototype = new THREE.Geometry;
Torus.prototype.constructor = Torus;
var Icosahedron = function(a) {
	function b(w, u, t) {
		var x = Math.sqrt(w * w + u * u + t * t);
		return f.vertices.push(new THREE.Vertex(new THREE.Vector3(w / x, u / x, t / x))) - 1
	}

	function c(w, u, t, x) {
		x.faces.push(new THREE.Face3(w, u, t))
	}

	function d(w, u) {
		var t = f.vertices[w].position,
			x = f.vertices[u].position;
		return b((t.x + x.x) / 2, (t.y + x.y) / 2, (t.z + x.z) / 2)
	}
	var f = this,
		g = new THREE.Geometry,
		h;
	this.subdivisions = a || 0;
	THREE.Geometry.call(this);
	a = (1 + Math.sqrt(5)) / 2;
	b(-1, a, 0);
	b(1, a, 0);
	b(-1, -a, 0);
	b(1, -a, 0);
	b(0, -1, a);
	b(0, 1, a);
	b(0, -1, -a);
	b(0,
		1, -a);
	b(a, 0, -1);
	b(a, 0, 1);
	b(-a, 0, -1);
	b(-a, 0, 1);
	c(0, 11, 5, g);
	c(0, 5, 1, g);
	c(0, 1, 7, g);
	c(0, 7, 10, g);
	c(0, 10, 11, g);
	c(1, 5, 9, g);
	c(5, 11, 4, g);
	c(11, 10, 2, g);
	c(10, 7, 6, g);
	c(7, 1, 8, g);
	c(3, 9, 4, g);
	c(3, 4, 2, g);
	c(3, 2, 6, g);
	c(3, 6, 8, g);
	c(3, 8, 9, g);
	c(4, 9, 5, g);
	c(2, 4, 11, g);
	c(6, 2, 10, g);
	c(8, 6, 7, g);
	c(9, 8, 1, g);
	for (a = 0; a < this.subdivisions; a++) {
		h = new THREE.Geometry;
		for (var k in g.faces) {
			var j = d(g.faces[k].a, g.faces[k].b),
				m = d(g.faces[k].b, g.faces[k].c),
				o = d(g.faces[k].c, g.faces[k].a);
			c(g.faces[k].a, j, o, h);
			c(g.faces[k].b, m, j, h);
			c(g.faces[k].c,
				o, m, h);
			c(j, m, o, h)
		}
		g.faces = h.faces
	}
	f.faces = g.faces;
	delete g;
	delete h;
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
	this.sortFacesByMaterial()
};
Icosahedron.prototype = new THREE.Geometry;
Icosahedron.prototype.constructor = Icosahedron;

function LathedObject(a, b, c) {
	THREE.Geometry.call(this);
	c = c || 2 * Math.PI;
	b = c / (b || 12);
	for (var d = [], f = [], g = [], h = [], k = 0; k < a.length; k++) {
		this.vertices.push(new THREE.Vertex(a[k]));
		f[k] = this.vertices.length - 1;
		d[k] = new THREE.Vector3(a[k].x, a[k].y, a[k].z)
	}
	for (var j = THREE.Matrix4.rotationZMatrix(b), m = 0; m <= c + 0.0010; m += b) {
		for (k = 0; k < d.length; k++)
			if (m < c) {
				d[k] = j.multiplyVector3(d[k].clone());
				this.vertices.push(new THREE.Vertex(d[k]));
				g[k] = this.vertices.length - 1
			} else g = h;
		m == 0 && (h = f);
		for (k = 0; k < f.length - 1; k++) {
			this.faces.push(new THREE.Face4(g[k],
				g[k + 1], f[k + 1], f[k]));
			this.uvs.push([new THREE.UV(m / c, k / a.length), new THREE.UV(m / c, (k + 1) / a.length), new THREE.UV((m - b) / c, (k + 1) / a.length), new THREE.UV((m - b) / c, k / a.length)])
		}
		f = g;
		g = []
	}
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
	this.sortFacesByMaterial()
}
LathedObject.prototype = new THREE.Geometry;
LathedObject.prototype.constructor = LathedObject;
if (!window.Int32Array) {
	window.Int32Array = Array;
	window.Float32Array = Array
}
THREE.MarchingCubes = function(a, b) {
	THREE.Object3D.call(this);
	this.materials = b instanceof Array ? b : [b];
	this.init = function(c) {
		this.isolation = 80;
		this.size = c;
		this.size2 = this.size * this.size;
		this.size3 = this.size2 * this.size;
		this.halfsize = this.size / 2;
		this.delta = 2 / this.size;
		this.yd = this.size;
		this.zd = this.size2;
		this.field = new Float32Array(this.size3);
		this.normal_cache = new Float32Array(this.size3 * 3);
		this.vlist = new Float32Array(36);
		this.nlist = new Float32Array(36);
		this.firstDraw = !0;
		this.maxCount = 4096;
		this.count =
			0;
		this.hasPos = !1;
		this.hasNormal = !1;
		this.positionArray = new Float32Array(this.maxCount * 3);
		this.normalArray = new Float32Array(this.maxCount * 3)
	};
	this.lerp = function(c, d, f) {
		return c + (d - c) * f
	};
	this.VIntX = function(c, d, f, g, h, k, j, m, o, w) {
		h = (h - o) / (w - o);
		o = this.normal_cache;
		d[g] = k + h * this.delta;
		d[g + 1] = j;
		d[g + 2] = m;
		f[g] = this.lerp(o[c], o[c + 3], h);
		f[g + 1] = this.lerp(o[c + 1], o[c + 4], h);
		f[g + 2] = this.lerp(o[c + 2], o[c + 5], h)
	};
	this.VIntY = function(c, d, f, g, h, k, j, m, o, w) {
		h = (h - o) / (w - o);
		o = this.normal_cache;
		d[g] = k;
		d[g + 1] = j + h * this.delta;
		d[g +
			2] = m;
		d = c + this.yd * 3;
		f[g] = this.lerp(o[c], o[d], h);
		f[g + 1] = this.lerp(o[c + 1], o[d + 1], h);
		f[g + 2] = this.lerp(o[c + 2], o[d + 2], h)
	};
	this.VIntZ = function(c, d, f, g, h, k, j, m, o, w) {
		h = (h - o) / (w - o);
		o = this.normal_cache;
		d[g] = k;
		d[g + 1] = j;
		d[g + 2] = m + h * this.delta;
		d = c + this.zd * 3;
		f[g] = this.lerp(o[c], o[d], h);
		f[g + 1] = this.lerp(o[c + 1], o[d + 1], h);
		f[g + 2] = this.lerp(o[c + 2], o[d + 2], h)
	};
	this.compNorm = function(c) {
		var d = c * 3;
		if (this.normal_cache[d] == 0) {
			this.normal_cache[d] = this.field[c - 1] - this.field[c + 1];
			this.normal_cache[d + 1] = this.field[c - this.yd] -
				this.field[c + this.yd];
			this.normal_cache[d + 2] = this.field[c - this.zd] - this.field[c + this.zd]
		}
	};
	this.polygonize = function(c, d, f, g, h, k) {
		var j = g + 1,
			m = g + this.yd,
			o = g + this.zd,
			w = j + this.yd,
			u = j + this.zd,
			t = g + this.yd + this.zd,
			x = j + this.yd + this.zd,
			A = 0,
			F = this.field[g],
			v = this.field[j],
			I = this.field[m],
			q = this.field[w],
			J = this.field[o],
			e = this.field[u],
			aa = this.field[t],
			L = this.field[x];
		F < h && (A |= 1);
		v < h && (A |= 2);
		I < h && (A |= 8);
		q < h && (A |= 4);
		J < h && (A |= 16);
		e < h && (A |= 32);
		aa < h && (A |= 128);
		L < h && (A |= 64);
		var M = THREE.edgeTable[A];
		if (M == 0) return 0;
		var V = this.delta,
			S = c + V,
			Y = d + V;
		V = f + V;
		if (M & 1) {
			this.compNorm(g);
			this.compNorm(j);
			this.VIntX(g * 3, this.vlist, this.nlist, 0, h, c, d, f, F, v)
		}
		if (M & 2) {
			this.compNorm(j);
			this.compNorm(w);
			this.VIntY(j * 3, this.vlist, this.nlist, 3, h, S, d, f, v, q)
		}
		if (M & 4) {
			this.compNorm(m);
			this.compNorm(w);
			this.VIntX(m * 3, this.vlist, this.nlist, 6, h, c, Y, f, I, q)
		}
		if (M & 8) {
			this.compNorm(g);
			this.compNorm(m);
			this.VIntY(g * 3, this.vlist, this.nlist, 9, h, c, d, f, F, I)
		}
		if (M & 16) {
			this.compNorm(o);
			this.compNorm(u);
			this.VIntX(o * 3, this.vlist, this.nlist, 12, h, c, d, V,
				J, e)
		}
		if (M & 32) {
			this.compNorm(u);
			this.compNorm(x);
			this.VIntY(u * 3, this.vlist, this.nlist, 15, h, S, d, V, e, L)
		}
		if (M & 64) {
			this.compNorm(t);
			this.compNorm(x);
			this.VIntX(t * 3, this.vlist, this.nlist, 18, h, c, Y, V, aa, L)
		}
		if (M & 128) {
			this.compNorm(o);
			this.compNorm(t);
			this.VIntY(o * 3, this.vlist, this.nlist, 21, h, c, d, V, J, aa)
		}
		if (M & 256) {
			this.compNorm(g);
			this.compNorm(o);
			this.VIntZ(g * 3, this.vlist, this.nlist, 24, h, c, d, f, F, J)
		}
		if (M & 512) {
			this.compNorm(j);
			this.compNorm(u);
			this.VIntZ(j * 3, this.vlist, this.nlist, 27, h, S, d, f, v, e)
		}
		if (M & 1024) {
			this.compNorm(w);
			this.compNorm(x);
			this.VIntZ(w * 3, this.vlist, this.nlist, 30, h, S, Y, f, q, L)
		}
		if (M & 2048) {
			this.compNorm(m);
			this.compNorm(t);
			this.VIntZ(m * 3, this.vlist, this.nlist, 33, h, c, Y, f, I, aa)
		}
		A <<= 4;
		for (h = g = 0; THREE.triTable[A + h] != -1;) {
			c = A + h;
			d = c + 1;
			f = c + 2;
			this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[c], 3 * THREE.triTable[d], 3 * THREE.triTable[f], k);
			h += 3;
			g++
		}
		return g
	};
	this.posnormtriv = function(c, d, f, g, h, k) {
		var j = this.count * 3;
		this.positionArray[j] = c[f];
		this.positionArray[j + 1] = c[f + 1];
		this.positionArray[j + 2] = c[f + 2];
		this.positionArray[j +
			3] = c[g];
		this.positionArray[j + 4] = c[g + 1];
		this.positionArray[j + 5] = c[g + 2];
		this.positionArray[j + 6] = c[h];
		this.positionArray[j + 7] = c[h + 1];
		this.positionArray[j + 8] = c[h + 2];
		this.normalArray[j] = d[f];
		this.normalArray[j + 1] = d[f + 1];
		this.normalArray[j + 2] = d[f + 2];
		this.normalArray[j + 3] = d[g];
		this.normalArray[j + 4] = d[g + 1];
		this.normalArray[j + 5] = d[g + 2];
		this.normalArray[j + 6] = d[h];
		this.normalArray[j + 7] = d[h + 1];
		this.normalArray[j + 8] = d[h + 2];
		this.hasPos = !0;
		this.hasNormal = !0;
		this.count += 3;
		this.count >= this.maxCount - 3 && k(this)
	};
	this.begin =
		function() {
			this.count = 0;
			this.hasPos = !1;
			this.hasNormal = !1
	};
	this.end = function(c) {
		if (this.count != 0) {
			for (var d = this.count * 3; d < this.positionArray.length; d++) this.positionArray[d] = 0;
			c(this)
		}
	};
	this.addBall = function(c, d, f, g, h) {
		var k = this.size * Math.sqrt(g / h),
			j = f * this.size,
			m = d * this.size,
			o = c * this.size,
			w = Math.floor(j - k);
		w < 1 && (w = 1);
		j = Math.floor(j + k);
		j > this.size - 1 && (j = this.size - 1);
		var u = Math.floor(m - k);
		u < 1 && (u = 1);
		m = Math.floor(m + k);
		m > this.size - 1 && (m = this.size - 1);
		var t = Math.floor(o - k);
		t < 1 && (t = 1);
		k = Math.floor(o + k);
		k > this.size - 1 && (k = this.size - 1);
		for (var x, A, F, v, I, q; w < j; w++) {
			o = this.size2 * w;
			A = w / this.size - f;
			I = A * A;
			for (A = u; A < m; A++) {
				F = o + this.size * A;
				x = A / this.size - d;
				q = x * x;
				for (x = t; x < k; x++) {
					v = x / this.size - c;
					v = g / (1.0E-6 + v * v + q + I) - h;
					v > 0 && (this.field[F + x] += v)
				}
			}
		}
	};
	this.addPlaneX = function(c, d) {
		var f, g, h, k, j, m = this.size,
			o = this.yd,
			w = this.zd,
			u = this.field,
			t = m * Math.sqrt(c / d);
		t > m && (t = m);
		for (f = 0; f < t; f++) {
			g = f / m;
			g *= g;
			k = c / (1.0E-4 + g) - d;
			if (k > 0)
				for (g = 0; g < m; g++) {
					j = f + g * o;
					for (h = 0; h < m; h++) u[w * h + j] += k
				}
		}
	};
	this.addPlaneY = function(c, d) {
		var f, g,
			h, k, j, m, o = this.size,
			w = this.yd,
			u = this.zd,
			t = this.field,
			x = o * Math.sqrt(c / d);
		x > o && (x = o);
		for (g = 0; g < x; g++) {
			f = g / o;
			f *= f;
			k = c / (1.0E-4 + f) - d;
			if (k > 0) {
				j = g * w;
				for (f = 0; f < o; f++) {
					m = j + f;
					for (h = 0; h < o; h++) t[u * h + m] += k
				}
			}
		}
	};
	this.addPlaneZ = function(c, d) {
		var f, g, h, k, j, m;
		size = this.size;
		yd = this.yd;
		zd = this.zd;
		field = this.field;
		dist = size * Math.sqrt(c / d);
		dist > size && (dist = size);
		for (h = 0; h < dist; h++) {
			f = h / size;
			f *= f;
			k = c / (1.0E-4 + f) - d;
			if (k > 0) {
				j = zd * h;
				for (g = 0; g < size; g++) {
					m = j + g * yd;
					for (f = 0; f < size; f++) field[m + f] += k
				}
			}
		}
	};
	this.reset = function() {
		var c;
		for (c = 0; c < this.size3; c++) {
			this.normal_cache[c * 3] = 0;
			this.field[c] = 0
		}
	};
	this.render = function(c) {
		this.begin();
		var d, f, g, h, k, j, m, o, w, u = this.size - 2;
		for (h = 1; h < u; h++) {
			w = this.size2 * h;
			m = (h - this.halfsize) / this.halfsize;
			for (g = 1; g < u; g++) {
				o = w + this.size * g;
				j = (g - this.halfsize) / this.halfsize;
				for (f = 1; f < u; f++) {
					k = (f - this.halfsize) / this.halfsize;
					d = o + f;
					this.polygonize(k, j, m, d, this.isolation, c)
				}
			}
		}
		this.end(c)
	};
	this.generateGeometry = function() {
		var c = 0,
			d = new THREE.Geometry;
		this.render(function(f) {
			var g, h, k, j, m, o, w, u;
			for (g =
				0; g < f.count; g++) {
				m = g * 3;
				w = m + 1;
				u = m + 2;
				h = f.positionArray[m];
				k = f.positionArray[w];
				j = f.positionArray[u];
				o = new THREE.Vector3(h, k, j);
				h = f.normalArray[m];
				k = f.normalArray[w];
				j = f.normalArray[u];
				m = new THREE.Vector3(h, k, j);
				m.normalize();
				m = new THREE.Vertex(o, m);
				d.vertices.push(m)
			}
			nfaces = f.count / 3;
			for (g = 0; g < nfaces; g++) {
				m = (c + g) * 3;
				w = m + 1;
				u = m + 2;
				o = d.vertices[m].normal;
				h = d.vertices[w].normal;
				k = d.vertices[u].normal;
				m = new THREE.Face3(m, w, u, [o, h, k]);
				d.faces.push(m)
			}
			c += nfaces;
			f.count = 0
		});
		d.sortFacesByMaterial();
		return d
	};
	this.init(a)
};
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107,
	1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170,
	419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0
]);
THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5,
	8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6,
	5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1,
	10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1,
	6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1,
	8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7,
	2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
	1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11,
	2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11,
	4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10,
	2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
]);
THREE.Loader = function(a) {
	this.statusDomElement = (this.showStatus = a) ? this.addStatusElement() : null
};
THREE.Loader.prototype = {
	addStatusElement: function() {
		var a = document.createElement("div");
		a.style.fontSize = "0.8em";
		a.style.textAlign = "left";
		a.style.background = "#b00";
		a.style.color = "#fff";
		a.style.width = "140px";
		a.style.padding = "0.25em 0.25em 0.25em 0.5em";
		a.style.position = "absolute";
		a.style.right = "0px";
		a.style.top = "0px";
		a.style.zIndex = 1E3;
		a.innerHTML = "Loading ...";
		return a
	},
	updateProgress: function(a) {
		var b = "Loaded ";
		b += a.total ? (100 * a.loaded / a.total).toFixed(0) + "%" : (a.loaded / 1E3).toFixed(2) + " KB";
		this.statusDomElement.innerHTML =
			b
	},
	loadAsciiOld: function(a, b) {
		var c = document.createElement("script");
		c.type = "text/javascript";
		c.onload = b;
		c.src = a;
		document.getElementsByTagName("head")[0].appendChild(c)
	},
	loadAscii: function(a) {
		var b = a.model,
			c = a.callback,
			d = a.texture_path ? a.texture_path : THREE.Loader.prototype.extractUrlbase(b);
		a = (new Date).getTime();
		b = new Worker(b);
		b.onmessage = function(f) {
			THREE.Loader.prototype.createModel(f.data, c, d)
		};
		b.postMessage(a)
	},
	loadBinary: function(a) {
		var b = a.model,
			c = a.callback,
			d = a.texture_path ? a.texture_path :
				THREE.Loader.prototype.extractUrlbase(b),
			f = a.bin_path ? a.bin_path : THREE.Loader.prototype.extractUrlbase(b);
		a = (new Date).getTime();
		b = new Worker(b);
		var g = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
		b.onmessage = function(h) {
			THREE.Loader.prototype.loadAjaxBuffers(h.data.buffers, h.data.materials, c, f, d, g)
		};
		b.onerror = function(h) {
			alert("worker.onerror: " + h.message + "\n" + h.data);
			h.preventDefault()
		};
		b.postMessage(a)
	},
	loadAjaxBuffers: function(a, b, c, d, f, g) {
		var h = new XMLHttpRequest,
			k = d + "/" + a,
			j = 0;
		h.onreadystatechange = function() {
			if (h.readyState == 4) h.status == 200 || h.status == 0 ? THREE.Loader.prototype.createBinModel(h.responseText, c, f, b) : alert("Couldn't load [" + k + "] [" + h.status + "]");
			else if (h.readyState == 3) {
				if (g) {
					j == 0 && (j = h.getResponseHeader("Content-Length"));
					g({
						total: j,
						loaded: h.responseText.length
					})
				}
			} else h.readyState == 2 && (j = h.getResponseHeader("Content-Length"))
		};
		h.open("GET", k, !0);
		h.overrideMimeType("text/plain; charset=x-user-defined");
		h.setRequestHeader("Content-Type", "text/plain");
		h.send(null)
	},
	createBinModel: function(a, b, c, d) {
		var f = function(g) {
			function h(y, E) {
				var D = o(y, E),
					P = o(y, E + 1),
					T = o(y, E + 2),
					oa = o(y, E + 3),
					la = (oa << 1 & 255 | T >> 7) - 127;
				D |= (T & 127) << 16 | P << 8;
				if (D == 0 && la == -127) return 0;
				return (1 - 2 * (oa >> 7)) * (1 + D * Math.pow(2, -23)) * Math.pow(2, la)
			}

			function k(y, E) {
				var D = o(y, E),
					P = o(y, E + 1),
					T = o(y, E + 2);
				return (o(y, E + 3) << 24) + (T << 16) + (P << 8) + D
			}

			function j(y, E) {
				var D = o(y, E);
				return (o(y, E + 1) << 8) + D
			}

			function m(y, E) {
				var D = o(y, E);
				return D > 127 ? D - 256 : D
			}

			function o(y, E) {
				return y.charCodeAt(E) & 255
			}

			function w(y) {
				var E, D, P;
				E =
					k(a, y);
				D = k(a, y + aa);
				P = k(a, y + L);
				y = j(a, y + M);
				THREE.Loader.prototype.f3(v, E, D, P, y)
			}

			function u(y) {
				var E, D, P, T, oa, la;
				E = k(a, y);
				D = k(a, y + aa);
				P = k(a, y + L);
				T = j(a, y + M);
				oa = k(a, y + V);
				la = k(a, y + S);
				y = k(a, y + Y);
				THREE.Loader.prototype.f3n(v, J, E, D, P, T, oa, la, y)
			}

			function t(y) {
				var E, D, P, T;
				E = k(a, y);
				D = k(a, y + Z);
				P = k(a, y + G);
				T = k(a, y + U);
				y = j(a, y + na);
				THREE.Loader.prototype.f4(v, E, D, P, T, y)
			}

			function x(y) {
				var E, D, P, T, oa, la, ja, ma;
				E = k(a, y);
				D = k(a, y + Z);
				P = k(a, y + G);
				T = k(a, y + U);
				oa = j(a, y + na);
				la = k(a, y + W);
				ja = k(a, y + ka);
				ma = k(a, y + ha);
				y = k(a, y + da);
				THREE.Loader.prototype.f4n(v,
					J, E, D, P, T, oa, la, ja, ma, y)
			}

			function A(y) {
				var E, D;
				E = k(a, y);
				D = k(a, y + ra);
				y = k(a, y + ya);
				THREE.Loader.prototype.uv3(v.uvs, e[E * 2], e[E * 2 + 1], e[D * 2], e[D * 2 + 1], e[y * 2], e[y * 2 + 1])
			}

			function F(y) {
				var E, D, P;
				E = k(a, y);
				D = k(a, y + l);
				P = k(a, y + z);
				y = k(a, y + B);
				THREE.Loader.prototype.uv4(v.uvs, e[E * 2], e[E * 2 + 1], e[D * 2], e[D * 2 + 1], e[P * 2], e[P * 2 + 1], e[y * 2], e[y * 2 + 1])
			}
			var v = this,
				I = 0,
				q, J = [],
				e = [],
				aa, L, M, V, S, Y, Z, G, U, na, W, ka, ha, da, ra, ya, l, z, B, p, n, C, H, N, ba;
			THREE.Geometry.call(this);
			THREE.Loader.prototype.init_materials(v, d, g);
			q = {
				signature: a.substr(I,
					8),
				header_bytes: o(a, I + 8),
				vertex_coordinate_bytes: o(a, I + 9),
				normal_coordinate_bytes: o(a, I + 10),
				uv_coordinate_bytes: o(a, I + 11),
				vertex_index_bytes: o(a, I + 12),
				normal_index_bytes: o(a, I + 13),
				uv_index_bytes: o(a, I + 14),
				material_index_bytes: o(a, I + 15),
				nvertices: k(a, I + 16),
				nnormals: k(a, I + 16 + 4),
				nuvs: k(a, I + 16 + 8),
				ntri_flat: k(a, I + 16 + 12),
				ntri_smooth: k(a, I + 16 + 16),
				ntri_flat_uv: k(a, I + 16 + 20),
				ntri_smooth_uv: k(a, I + 16 + 24),
				nquad_flat: k(a, I + 16 + 28),
				nquad_smooth: k(a, I + 16 + 32),
				nquad_flat_uv: k(a, I + 16 + 36),
				nquad_smooth_uv: k(a, I + 16 + 40)
			};
			I += q.header_bytes;
			aa = q.vertex_index_bytes;
			L = q.vertex_index_bytes * 2;
			M = q.vertex_index_bytes * 3;
			V = q.vertex_index_bytes * 3 + q.material_index_bytes;
			S = q.vertex_index_bytes * 3 + q.material_index_bytes + q.normal_index_bytes;
			Y = q.vertex_index_bytes * 3 + q.material_index_bytes + q.normal_index_bytes * 2;
			Z = q.vertex_index_bytes;
			G = q.vertex_index_bytes * 2;
			U = q.vertex_index_bytes * 3;
			na = q.vertex_index_bytes * 4;
			W = q.vertex_index_bytes * 4 + q.material_index_bytes;
			ka = q.vertex_index_bytes * 4 + q.material_index_bytes + q.normal_index_bytes;
			ha = q.vertex_index_bytes *
				4 + q.material_index_bytes + q.normal_index_bytes * 2;
			da = q.vertex_index_bytes * 4 + q.material_index_bytes + q.normal_index_bytes * 3;
			ra = q.uv_index_bytes;
			ya = q.uv_index_bytes * 2;
			l = q.uv_index_bytes;
			z = q.uv_index_bytes * 2;
			B = q.uv_index_bytes * 3;
			g = q.vertex_index_bytes * 3 + q.material_index_bytes;
			ba = q.vertex_index_bytes * 4 + q.material_index_bytes;
			p = q.ntri_flat * g;
			n = q.ntri_smooth * (g + q.normal_index_bytes * 3);
			C = q.ntri_flat_uv * (g + q.uv_index_bytes * 3);
			H = q.ntri_smooth_uv * (g + q.normal_index_bytes * 3 + q.uv_index_bytes * 3);
			N = q.nquad_flat * ba;
			g = q.nquad_smooth * (ba + q.normal_index_bytes * 4);
			ba = q.nquad_flat_uv * (ba + q.uv_index_bytes * 4);
			I += function(y) {
				for (var E, D, P, T = q.vertex_coordinate_bytes * 3, oa = y + q.nvertices * T; y < oa; y += T) {
					E = h(a, y);
					D = h(a, y + q.vertex_coordinate_bytes);
					P = h(a, y + q.vertex_coordinate_bytes * 2);
					THREE.Loader.prototype.v(v, E, D, P)
				}
				return q.nvertices * T
			}(I);
			I += function(y) {
				for (var E, D, P, T = q.normal_coordinate_bytes * 3, oa = y + q.nnormals * T; y < oa; y += T) {
					E = m(a, y);
					D = m(a, y + q.normal_coordinate_bytes);
					P = m(a, y + q.normal_coordinate_bytes * 2);
					J.push(E / 127, D /
						127, P / 127)
				}
				return q.nnormals * T
			}(I);
			I += function(y) {
				for (var E, D, P = q.uv_coordinate_bytes * 2, T = y + q.nuvs * P; y < T; y += P) {
					E = h(a, y);
					D = h(a, y + q.uv_coordinate_bytes);
					e.push(E, D)
				}
				return q.nuvs * P
			}(I);
			p = I + p;
			n = p + n;
			C = n + C;
			H = C + H;
			N = H + N;
			g = N + g;
			ba = g + ba;
			(function(y) {
				var E, D = q.vertex_index_bytes * 3 + q.material_index_bytes,
					P = D + q.uv_index_bytes * 3,
					T = y + q.ntri_flat_uv * P;
				for (E = y; E < T; E += P) {
					w(E);
					A(E + D)
				}
				return T - y
			})(n);
			(function(y) {
				var E, D = q.vertex_index_bytes * 3 + q.material_index_bytes + q.normal_index_bytes * 3,
					P = D + q.uv_index_bytes * 3,
					T = y +
						q.ntri_smooth_uv * P;
				for (E = y; E < T; E += P) {
					u(E);
					A(E + D)
				}
				return T - y
			})(C);
			(function(y) {
				var E, D = q.vertex_index_bytes * 4 + q.material_index_bytes,
					P = D + q.uv_index_bytes * 4,
					T = y + q.nquad_flat_uv * P;
				for (E = y; E < T; E += P) {
					t(E);
					F(E + D)
				}
				return T - y
			})(g);
			(function(y) {
				var E, D = q.vertex_index_bytes * 4 + q.material_index_bytes + q.normal_index_bytes * 4,
					P = D + q.uv_index_bytes * 4,
					T = y + q.nquad_smooth_uv * P;
				for (E = y; E < T; E += P) {
					x(E);
					F(E + D)
				}
				return T - y
			})(ba);
			(function(y) {
				var E, D = q.vertex_index_bytes * 3 + q.material_index_bytes,
					P = y + q.ntri_flat * D;
				for (E = y; E <
					P; E += D) w(E);
				return P - y
			})(I);
			(function(y) {
				var E, D = q.vertex_index_bytes * 3 + q.material_index_bytes + q.normal_index_bytes * 3,
					P = y + q.ntri_smooth * D;
				for (E = y; E < P; E += D) u(E);
				return P - y
			})(p);
			(function(y) {
				var E, D = q.vertex_index_bytes * 4 + q.material_index_bytes,
					P = y + q.nquad_flat * D;
				for (E = y; E < P; E += D) t(E);
				return P - y
			})(H);
			(function(y) {
				var E, D = q.vertex_index_bytes * 4 + q.material_index_bytes + q.normal_index_bytes * 4,
					P = y + q.nquad_smooth * D;
				for (E = y; E < P; E += D) x(E);
				return P - y
			})(N);
			this.computeCentroids();
			this.computeFaceNormals();
			this.sortFacesByMaterial()
		};
		f.prototype = new THREE.Geometry;
		f.prototype.constructor = f;
		b(new f(c))
	},
	createModel: function(a, b, c) {
		var d = function(f) {
			var g = this;
			THREE.Geometry.call(this);
			THREE.Loader.prototype.init_materials(g, a.materials, f);
			(function() {
				var h, k, j, m, o;
				h = 0;
				for (k = a.vertices.length; h < k; h += 3) {
					j = a.vertices[h];
					m = a.vertices[h + 1];
					o = a.vertices[h + 2];
					THREE.Loader.prototype.v(g, j, m, o)
				}
				if (a.colors) {
					h = 0;
					for (k = a.colors.length; h < k; h += 3) {
						j = a.colors[h];
						m = a.colors[h + 1];
						o = a.colors[h + 2];
						THREE.Loader.prototype.vc(g, j, m, o)
					}
				}
			})();
			(function() {
				function h(x,
					A) {
					THREE.Loader.prototype.f3(g, x[A], x[A + 1], x[A + 2], x[A + 3])
				}

				function k(x, A) {
					THREE.Loader.prototype.f3n(g, a.normals, x[A], x[A + 1], x[A + 2], x[A + 3], x[A + 4], x[A + 5], x[A + 6])
				}

				function j(x, A) {
					THREE.Loader.prototype.f4(g, x[A], x[A + 1], x[A + 2], x[A + 3], x[A + 4])
				}

				function m(x, A) {
					THREE.Loader.prototype.f4n(g, a.normals, x[A], x[A + 1], x[A + 2], x[A + 3], x[A + 4], x[A + 5], x[A + 6], x[A + 7], x[A + 8])
				}

				function o(x, A) {
					var F, v, I, q, J, e, aa, L, M;
					F = x[A];
					v = x[A + 1];
					I = x[A + 2];
					q = a.uvs[F * 2];
					aa = a.uvs[F * 2 + 1];
					J = a.uvs[v * 2];
					L = a.uvs[v * 2 + 1];
					e = a.uvs[I * 2];
					M = a.uvs[I * 2 +
						1];
					THREE.Loader.prototype.uv3(g.uvs, q, aa, J, L, e, M);
					if (a.uvs2 && a.uvs2.length) {
						q = a.uvs2[F * 2];
						aa = a.uvs2[F * 2 + 1];
						J = a.uvs2[v * 2];
						L = a.uvs2[v * 2 + 1];
						e = a.uvs2[I * 2];
						M = a.uvs2[I * 2 + 1];
						THREE.Loader.prototype.uv3(g.uvs2, q, 1 - aa, J, 1 - L, e, 1 - M)
					}
				}

				function w(x, A) {
					var F, v, I, q, J, e, aa, L, M, V, S, Y;
					F = x[A];
					v = x[A + 1];
					I = x[A + 2];
					q = x[A + 3];
					J = a.uvs[F * 2];
					M = a.uvs[F * 2 + 1];
					e = a.uvs[v * 2];
					V = a.uvs[v * 2 + 1];
					aa = a.uvs[I * 2];
					S = a.uvs[I * 2 + 1];
					L = a.uvs[q * 2];
					Y = a.uvs[q * 2 + 1];
					THREE.Loader.prototype.uv4(g.uvs, J, M, e, V, aa, S, L, Y);
					if (a.uvs2) {
						J = a.uvs2[F * 2];
						M = a.uvs2[F *
							2 + 1];
						e = a.uvs2[v * 2];
						V = a.uvs2[v * 2 + 1];
						aa = a.uvs2[I * 2];
						S = a.uvs2[I * 2 + 1];
						L = a.uvs2[q * 2];
						Y = a.uvs2[q * 2 + 1];
						THREE.Loader.prototype.uv4(g.uvs2, J, 1 - M, e, 1 - V, aa, 1 - S, L, 1 - Y)
					}
				}
				var u, t;
				u = 0;
				for (t = a.triangles_uv.length; u < t; u += 7) {
					h(a.triangles_uv, u);
					o(a.triangles_uv, u + 4)
				}
				u = 0;
				for (t = a.triangles_n_uv.length; u < t; u += 10) {
					k(a.triangles_n_uv, u);
					o(a.triangles_n_uv, u + 7)
				}
				u = 0;
				for (t = a.quads_uv.length; u < t; u += 9) {
					j(a.quads_uv, u);
					w(a.quads_uv, u + 5)
				}
				u = 0;
				for (t = a.quads_n_uv.length; u < t; u += 13) {
					m(a.quads_n_uv, u);
					w(a.quads_n_uv, u + 9)
				}
				u = 0;
				for (t =
					a.triangles.length; u < t; u += 4) h(a.triangles, u);
				u = 0;
				for (t = a.triangles_n.length; u < t; u += 7) k(a.triangles_n, u);
				u = 0;
				for (t = a.quads.length; u < t; u += 5) j(a.quads, u);
				u = 0;
				for (t = a.quads_n.length; u < t; u += 9) m(a.quads_n, u)
			})();
			(function() {
				var h, k, j, m;
				if (a.skinWeights) {
					h = 0;
					for (k = a.skinWeights.length; h < k; h += 2) {
						j = a.skinWeights[h];
						m = a.skinWeights[h + 1];
						THREE.Loader.prototype.sw(g, j, m, 0, 0)
					}
				}
				if (a.skinIndices) {
					h = 0;
					for (k = a.skinIndices.length; h < k; h += 2) {
						j = a.skinIndices[h];
						m = a.skinIndices[h + 1];
						THREE.Loader.prototype.si(g, j, m, 0, 0)
					}
				}
				THREE.Loader.prototype.bones(g,
					a.bones);
				THREE.Loader.prototype.animation(g, a.animation)
			})();
			this.computeCentroids();
			this.computeFaceNormals();
			this.sortFacesByMaterial()
		};
		d.prototype = new THREE.Geometry;
		d.prototype.constructor = d;
		b(new d(c))
	},
	bones: function(a, b) {
		a.bones = b
	},
	animation: function(a, b) {
		a.animation = b
	},
	si: function(a, b, c, d, f) {
		a.skinIndices.push(new THREE.Vector4(b, c, d, f))
	},
	sw: function(a, b, c, d, f) {
		a.skinWeights.push(new THREE.Vector4(b, c, d, f))
	},
	v: function(a, b, c, d) {
		a.vertices.push(new THREE.Vertex(new THREE.Vector3(b, c, d)))
	},
	vc: function(a, b, c, d) {
		var f = new THREE.Color(16777215);
		f.setRGB(b, c, d);
		a.colors.push(f)
	},
	f3: function(a, b, c, d, f) {
		a.faces.push(new THREE.Face3(b, c, d, null, a.materials[f]))
	},
	f4: function(a, b, c, d, f, g) {
		a.faces.push(new THREE.Face4(b, c, d, f, null, a.materials[g]))
	},
	f3n: function(a, b, c, d, f, g, h, k, j) {
		g = a.materials[g];
		var m = b[k * 3],
			o = b[k * 3 + 1];
		k = b[k * 3 + 2];
		var w = b[j * 3],
			u = b[j * 3 + 1];
		j = b[j * 3 + 2];
		a.faces.push(new THREE.Face3(c, d, f, [new THREE.Vector3(b[h * 3], b[h * 3 + 1], b[h * 3 + 2]), new THREE.Vector3(m, o, k), new THREE.Vector3(w, u, j)],
			g))
	},
	f4n: function(a, b, c, d, f, g, h, k, j, m, o) {
		h = a.materials[h];
		var w = b[j * 3],
			u = b[j * 3 + 1];
		j = b[j * 3 + 2];
		var t = b[m * 3],
			x = b[m * 3 + 1];
		m = b[m * 3 + 2];
		var A = b[o * 3],
			F = b[o * 3 + 1];
		o = b[o * 3 + 2];
		a.faces.push(new THREE.Face4(c, d, f, g, [new THREE.Vector3(b[k * 3], b[k * 3 + 1], b[k * 3 + 2]), new THREE.Vector3(w, u, j), new THREE.Vector3(t, x, m), new THREE.Vector3(A, F, o)], h))
	},
	uv3: function(a, b, c, d, f, g, h) {
		var k = [];
		k.push(new THREE.UV(b, c));
		k.push(new THREE.UV(d, f));
		k.push(new THREE.UV(g, h));
		a.push(k)
	},
	uv4: function(a, b, c, d, f, g, h, k, j) {
		var m = [];
		m.push(new THREE.UV(b,
			c));
		m.push(new THREE.UV(d, f));
		m.push(new THREE.UV(g, h));
		m.push(new THREE.UV(k, j));
		a.push(m)
	},
	init_materials: function(a, b, c) {
		a.materials = [];
		for (var d = 0; d < b.length; ++d) a.materials[d] = [THREE.Loader.prototype.createMaterial(b[d], c)]
	},
	createMaterial: function(a, b) {
		function c(k) {
			k = Math.log(k) / Math.LN2;
			return Math.floor(k) == k
		}

		function d(k, j) {
			var m = new Image;
			m.onload = function() {
				if (!c(this.width) || !c(this.height)) {
					var o = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)),
						w = Math.pow(2, Math.round(Math.log(this.height) /
							Math.LN2));
					k.image.width = o;
					k.image.height = w;
					k.image.getContext("2d").drawImage(this, 0, 0, o, w)
				} else k.image = this;
				k.needsUpdate = !0
			};
			m.src = j
		}
		var f, g, h;
		f = "MeshLambertMaterial";
		g = {
			color: 15658734,
			opacity: 1,
			map: null,
			light_map: null,
			vertex_colors: a.vertex_colors
		};
		a.shading && a.shading == "Phong" && (f = "MeshPhongMaterial");
		if (a.map_diffuse && b) {
			h = document.createElement("canvas");
			g.map = new THREE.Texture(h);
			d(g.map, b + "/" + a.map_diffuse)
		} else if (a.col_diffuse) {
			h = (a.col_diffuse[0] * 255 << 16) + (a.col_diffuse[1] * 255 << 8) + a.col_diffuse[2] *
				255;
			g.color = h;
			g.opacity = a.transparency
		} else if (a.a_dbg_color) g.color = a.a_dbg_color;
		if (a.map_lightmap && b) {
			h = document.createElement("canvas");
			g.light_map = new THREE.Texture(h);
			d(g.light_map, b + "/" + a.map_lightmap)
		}
		return new THREE[f](g)
	},
	extractUrlbase: function(a) {
		a = a.split("/");
		a.pop();
		return a.join("/")
	}
};