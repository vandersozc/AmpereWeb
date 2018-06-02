package com.vandersoncamp.ampereweb.model;import com.vandersoncamp.ampereweb.util.EntityID;import javax.persistence.*;import javax.validation.constraints.NotNull;import javax.validation.constraints.Size;import java.math.BigDecimal;@Entity@Table(name = "aparelhos")@SequenceGenerator(name = "seq_aparelhos", sequenceName = "seq_aparelhos", initialValue = 1, allocationSize = 1)public class Aparelho implements EntityID {    @Id    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_aparelhos")    private Long id;    @NotNull(message = "{Aparelho.descricao.NotNull}")    @Size(min = 1, max = 255, message = "{Aparelho.descricao.Size}")    @Column(name = "descricao", length = 255, nullable = false)    private String descricao;    @NotNull(message = "{Aparelho.potencia.NotNull}")    @Column(name = "potencia", nullable = false)    private BigDecimal potencia;    @NotNull(message = "{Aparelho.tensao.NotNull}")    @Column(name = "tensao", nullable = false)    private Integer tensao;    @Override    public Long getId() {        return id;    }    public String getDescricao() {        return descricao;    }    public void setDescricao(String descricao) {        this.descricao = descricao;    }    public BigDecimal getPotencia() {        return potencia;    }    public void setPotencia(BigDecimal potencia) {        this.potencia = potencia;    }    public Integer getTensao() {        return tensao;    }    public void setTensao(Integer tensao) {        this.tensao = tensao;    }}